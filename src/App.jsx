import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import DefinitionDisplay from './components/DefinitionDisplay';

function App() {
  const [word, setWord] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!word) return;

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(
            word
          )}`
        );
        if (!response.ok) {
          throw new Error('Word not found');
        }
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      }
    };

    fetchData();
  }, [word]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <header className="w-full max-w-xl text-center mb-4">
        <h1 className="text-3xl font-bold text-gray-800">
          React Dictionary App
        </h1>
      </header>
      <main className="w-full max-w-xl">
        <SearchBar setWord={setWord} />
        <DefinitionDisplay data={data} error={error} />
      </main>
    </div>
  );
}

export default App;
