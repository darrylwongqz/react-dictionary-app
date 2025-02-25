import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar Component', () => {
  it('calls setWord with valid input', () => {
    const mockSetWord = vi.fn();
    render(<SearchBar setWord={mockSetWord} />);
    const input = screen.getByLabelText(/word to define/i);
    const button = screen.getByRole('button', { name: /search/i });

    // Simulate entering a valid word and submitting the form
    fireEvent.change(input, { target: { value: 'hello' } });
    fireEvent.click(button);

    expect(mockSetWord).toHaveBeenCalledWith('hello');
  });

  it('shows error message when input is empty', () => {
    const mockSetWord = vi.fn();
    render(<SearchBar setWord={mockSetWord} />);
    const button = screen.getByRole('button', { name: /search/i });

    // Submit without typing anything
    fireEvent.click(button);

    expect(screen.getByText(/input cannot be empty/i)).toBeInTheDocument();
    expect(mockSetWord).not.toHaveBeenCalled();
  });

  it('shows error message for invalid input', () => {
    const mockSetWord = vi.fn();
    render(<SearchBar setWord={mockSetWord} />);
    const input = screen.getByLabelText(/word to define/i);
    const button = screen.getByRole('button', { name: /search/i });

    // Enter an invalid word (e.g. containing an exclamation mark)
    fireEvent.change(input, { target: { value: 'hello!' } });
    fireEvent.click(button);

    expect(screen.getByText(/please enter a valid word/i)).toBeInTheDocument();
    expect(mockSetWord).not.toHaveBeenCalled();
  });
});
