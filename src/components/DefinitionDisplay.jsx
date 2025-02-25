import React from 'react';
import AudioPlayer from './AudioPlayer';

function DefinitionDisplay({ data, error }) {
  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!data) {
    return (
      <p className="text-gray-700">Search for a word to see its definition.</p>
    );
  }

  return (
    <div className="bg-white p-4 rounded shadow">
      {data.map((entry, index) => (
        <div key={index} className="mb-4">
          <h2 className="text-2xl font-bold text-gray-800">{entry.word}</h2>
          {entry.phonetics && entry.phonetics[0] && (
            <div className="flex items-center mb-2">
              {entry.phonetics[0].audio && (
                <AudioPlayer src={entry.phonetics[0].audio} />
              )}
              {entry.phonetics[0].text && (
                <span className="ml-2 text-gray-600">
                  {entry.phonetics[0].text}
                </span>
              )}
            </div>
          )}
          {entry.meanings.map((meaning, mIndex) => (
            <div key={mIndex} className="mb-2">
              <p className="italic text-gray-700">{meaning.partOfSpeech}</p>
              <ul className="list-disc list-inside text-gray-700">
                {meaning.definitions.map((def, dIndex) => (
                  <li key={dIndex}>{def.definition}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default DefinitionDisplay;
