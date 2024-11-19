module.exports = {
    testEnvironment: "jest-environment-jsdom", // For React testing environment
    setupFilesAfterEnv: ["<rootDir>/jest.setup.cjs"], // Custom setup file if needed
    transform: {
      "^.+\\.jsx?$": "babel-jest", // Transform JS and JSX files with Babel
      "\\.css$": "jest-transform-stub", // Handle CSS files with jest-transform-stub
    },
    moduleFileExtensions: ["js", "jsx"], // Ensure Jest recognizes JS and JSX files
  };
  