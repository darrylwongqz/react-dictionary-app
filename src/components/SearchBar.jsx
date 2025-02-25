import React, { useState, useRef } from 'react';

function SearchBar({ setWord }) {
  const [inputValue, setInputValue] = useState('');
  const [validationError, setValidationError] = useState('');
  const inputRef = useRef(null);

  const validWordRegex = /^[A-Za-z'-]+$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedValue = inputValue.trim();
    if (trimmedValue === '') {
      setValidationError('Input cannot be empty.');
      return;
    }
    if (!validWordRegex.test(trimmedValue)) {
      setValidationError(
        'Please enter a valid word using letters, apostrophes, or hyphens.'
      );
      return;
    }
    setValidationError('');
    setWord(trimmedValue);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <label
        htmlFor="word-input"
        className="block text-gray-700 font-medium mb-2"
      >
        Enter a word:
      </label>
      <div className="flex">
        <input
          type="text"
          id="word-input"
          ref={inputRef}
          className="w-full p-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          aria-label="Word to define"
        />
        <button
          type="submit"
          className="px-4 bg-blue-500 text-white rounded-r hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
      </div>
      {validationError && (
        <p className="mt-2 text-red-500">{validationError}</p>
      )}
    </form>
  );
}

export default SearchBar;
