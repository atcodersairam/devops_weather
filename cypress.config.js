// cypress.config.js
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // No need to specify custom Webpack config for CRA, use default bundler
      config.devServer = {
        framework: "react",
        bundler: "webpack", // Use Webpack as the bundler for Create React App
      };

      return config;
    },
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
