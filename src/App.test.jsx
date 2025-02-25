import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App Component', () => {
  afterEach(() => {
    global.fetch = undefined;
  });

  it('fetches and displays word definition on valid search', async () => {
    const mockResponse = [
      {
        word: 'hello',
        phonetics: [
          { audio: 'http://example.com/hello.mp3', text: '/həˈləʊ/' },
        ],
        meanings: [
          {
            partOfSpeech: 'exclamation',
            definitions: [{ definition: 'A greeting.' }],
          },
        ],
      },
    ];

    // Mock the global fetch function
    global.fetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    render(<App />);

    const input = screen.getByLabelText(/word to define/i);
    const button = screen.getByRole('button', { name: /search/i });

    // Await the typing event so the input updates
    await userEvent.type(input, 'hello');
    await userEvent.click(button);

    // Wait for fetch to be called
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    // Verify that the definition details are displayed
    expect(screen.getByText(/hello/i)).toBeInTheDocument();
    expect(screen.getByText(/a greeting\./i)).toBeInTheDocument();
  });

  it('displays error message when fetch fails', async () => {
    global.fetch = vi.fn().mockResolvedValueOnce({
      ok: false,
      json: async () => ({ message: 'Word not found' }),
    });

    render(<App />);

    const input = screen.getByLabelText(/word to define/i);
    const button = screen.getByRole('button', { name: /search/i });

    await userEvent.type(input, 'nonexistentword');
    await userEvent.click(button);

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
    expect(screen.getByText(/word not found/i)).toBeInTheDocument();
  });
});
