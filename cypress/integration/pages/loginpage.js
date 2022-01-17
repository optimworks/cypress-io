var loginpagelocators = require('../locators/loginpagelocators.js');
Cypress.Commands.add('logindetails', (uname, pass) => {
    cy.get(loginpagelocators.usernameLocator).should('be.visible').type(uname);
    cy.get(loginpagelocators.passwordLocator).should('be.enabled').type(pass);
    cy.get(loginpagelocators.loginbtnLocator).should('be.enabled').click();
})
