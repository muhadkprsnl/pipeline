// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
Cypress.Commands.add('login', (username, password) => {
    cy.session([username, password], () => {
        cy.intercept('GET', '/ngsw.json*', { statusCode: 404 });
        cy.visit('/login', { failOnStatusCode: false });

        cy.get('#email').type(username, { force: true });
        cy.get('#password').type(password);
        cy.get('.btn').click({ force: true });
        cy.wait(10000)

        // Validate successful login by checking the URL
        cy.url().should('contain', '/dashboard'); // Ensure login was successful
    })

})
