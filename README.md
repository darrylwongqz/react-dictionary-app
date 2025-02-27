# React Dictionary App

The React Dictionary App is a responsive React application that lets users search for word definitions using the [Dictionary API](https://dictionaryapi.dev/). It displays definitions, parts of speech, and even plays an audio pronunciation (if available) for the searched word. The app is built using modern tooling for fast development and efficient production builds.

## Features

- **Word Search:** Enter a word to fetch and display its definition.
- **Audio Pronunciation:** Plays an audio clip for the word’s pronunciation if available.
- **Responsive & Accessible:** Styled with Tailwind CSS for a modern look and accessible user interface.
- **Fast Development:** Built with Vite for an optimized development experience.
- **Testing:** Unit and integration tests written with Vitest and React Testing Library.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd react-dictionary-app-master
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

## Running the Application

### Development Mode

To start the development server with hot module replacement, run:

```bash
npm run dev
```

Open your browser and visit the URL provided in your terminal (usually [http://localhost:3000](http://localhost:3000)) to see the app in action.

### Production Build

To create an optimized production build, run:

```bash
npm run build
```

Then, to preview the production build locally, run:

```bash
npm run preview
```

## Running Tests

This project uses Vitest along with React Testing Library for testing.

To run all tests, execute:

```bash
npm run test
```

Vitest will run your test suites in a jsdom environment, and you’ll see the test results in your terminal.

## Project Structure

```
react-dictionary-app-master/
├── public/                # Static assets and index.html
├── src/
│   ├── components/        # React components (SearchBar, DefinitionDisplay, AudioPlayer, etc.)
│   ├── App.jsx            # Main application component
│   ├── main.jsx           # Application entry point
│   └── ...                # Other source files
├── tests/                 # (Optional) Test setup file(s)
├── vite.config.js         # Vite configuration file (includes Vitest settings)
├── package.json           # Project metadata, scripts, and dependencies
└── README.md              # This file
```

## Technologies Used

- **React:** JavaScript library for building user interfaces.
- **Vite:** Modern, fast build tool for frontend development.
- **Tailwind CSS:** Utility-first CSS framework for styling.
- **Vitest:** Testing framework for Vite projects.
- **React Testing Library:** For testing React components.
- **jsdom:** Emulates a browser environment for tests.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Contributions, issues, and feature requests are welcome! Please open an issue or submit a pull request.
