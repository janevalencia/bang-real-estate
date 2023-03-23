import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/tests/e2e/**/*.cy.{js,jsx,ts,tsx}",
    video: false,
    excludeSpecPattern: [
      '*/**/example', // exclude all tests in the example folder
    ],
  },
});
