import React from 'react';

function AudioPlayer({ src }) {
  if (!src) {
    return <div>Audio not available</div>;
  }

  return (
    <audio controls className="w-full" aria-label="Pronunciation audio">
      <source src={src} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
}

export default AudioPlayer;
