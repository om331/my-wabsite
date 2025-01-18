import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    // Base URL for the application under test
    baseUrl: "http://localhost:3000",
    
    // File patterns for tests
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    
    // Custom Node.js event listeners
    setupNodeEvents(on, config) {
      // Add plugins or custom tasks here
      on("task", {
        log(message) {
          console.log(message);
          return null;
        },
      });
    },
    
    // Default timeout for commands
    defaultCommandTimeout: 8000,

    // Enable or disable video recording of tests
    video: false,
  },
});
