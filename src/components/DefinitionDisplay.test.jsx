import React from 'react';
import { render, screen } from '@testing-library/react';
import DefinitionDisplay from './DefinitionDisplay';

describe('DefinitionDisplay Component', () => {
  it('displays placeholder text when no data is provided', () => {
    render(<DefinitionDisplay data={null} error={null} />);
    expect(
      screen.getByText(/search for a word to see its definition/i)
    ).toBeInTheDocument();
  });

  it('displays an error message when error is passed', () => {
    render(<DefinitionDisplay data={null} error="Word not found" />);
    expect(screen.getByText(/word not found/i)).toBeInTheDocument();
  });

  it('displays definition data when available', () => {
    const mockData = [
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

    render(<DefinitionDisplay data={mockData} error={null} />);
    expect(screen.getByText(/hello/i)).toBeInTheDocument();
    expect(screen.getByText(/\/həˈləʊ\//i)).toBeInTheDocument();
    expect(screen.getByText(/a greeting\./i)).toBeInTheDocument();
  });
});
