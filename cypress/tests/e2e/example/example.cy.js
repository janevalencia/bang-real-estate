describe('Navigation', () => {
    it('should render homepage', () => {
        // Start from the index page
        cy.visit('http://localhost:3000/');

        // Should display the hello greeting.
        cy.get('[data-cy=welcome-greeting]').contains(/hello/i);
    })
})