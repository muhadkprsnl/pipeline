import { cs1 } from "./sample/unt"




describe('Coach listing', () => {
    const players = new cs1();

    beforeEach(() => {
        // Assuming cy.login is a valid custom command
        cy.intercept('GET', '/ngsw.json*', { statusCode: 404 });
        cy.login('academy@roninaks.com', 'P@ssw0rd');
    });





    it.only('should navigate to the members page', () => {
        players.visitMembers();
        players.verifyaddNewMembers();
    });
})