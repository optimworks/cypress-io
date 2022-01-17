var loclog = require('../locators/loginloc.js');
Cypress.Commands.add('logindetails', (uname, pass) => {
    cy.get(loclog.usernameLocator).should('be.visible').type(uname);
    cy.get(loclog.passwordLocator).should('be.enabled').type(pass);
    cy.get(loclog.loginbtnLocator).should('be.enabled').click();
})
