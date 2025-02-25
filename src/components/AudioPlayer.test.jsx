import React from 'react';
import { render, screen } from '@testing-library/react';
import AudioPlayer from './AudioPlayer';

describe('AudioPlayer', () => {
  it('renders an audio element with the correct source', () => {
    render(<AudioPlayer src="http://example.com/audio.mp3" />);
    const audioElement = screen.getByLabelText(/pronunciation audio/i);
    expect(audioElement).toBeInTheDocument();

    const source = audioElement.querySelector('source');
    expect(source).toHaveAttribute('src', 'http://example.com/audio.mp3');
  });

  it('does not render an audio element when src is empty', () => {
    render(<AudioPlayer src="" />);
    // Query using queryByLabelText which returns null if not found
    const audioElement = screen.queryByLabelText(/pronunciation audio/i);
    expect(audioElement).toBeNull();
  });

  it('renders a fallback message when src is not provided', () => {
    // If you choose to show a fallback message (e.g., "Audio not available")
    render(<AudioPlayer />);
    expect(screen.getByText(/audio not available/i)).toBeInTheDocument();
  });
});
