// cypress/e2e/example.cy.js
describe("Example Test", () => {
  beforeEach(() => {
    // Handle uncaught exceptions
    cy.on("uncaught:exception", (err) => {
      // Ignore specific geolocation error
      if (err.message.includes("[object GeolocationPositionError]")) {
        return false; // Prevents Cypress from failing the test
      }
      // Let other errors fail the test
      return true;
    });
  });

  it("Visits the app", () => {
    cy.visit("http://localhost:3001"); // Replace with your app's URL
    cy.contains("Weather").should("exist"); // Replace with a relevant test
  });
});
