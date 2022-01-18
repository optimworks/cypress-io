var addemployeepagelocators = require('../locators/addemployeepagelocators.js');
Cypress.Commands.add('addemployeedetails', (fname, mname, lname, number, path, uname, pwd, repwd, selected) => {
   cy.get(addemployeepagelocators.pimLocator).should('be.visible').click();
   cy.get(addemployeepagelocators.addempLocator).click({ force: true });
   cy.get(addemployeepagelocators.fnameLocator).type(fname);
   cy.get(addemployeepagelocators.mnameLocator).type(mname);
   cy.get(addemployeepagelocators.lnameLocator).type(lname);
   cy.get(addemployeepagelocators.empidLocator).clear().type(number);
   cy.get(addemployeepagelocators.photoLocator).attachFile(path);
   cy.get(addemployeepagelocators.checkboxLocator).click();
   cy.get(addemployeepagelocators.checkunameLocator).type(uname);
   cy.get(addemployeepagelocators.checkpwdLocator).type(pwd);
   cy.get(addemployeepagelocators.checkrepwdLocator).type(repwd);
   cy.get(addemployeepagelocators.statusLocator).select(selected);
   cy.get(addemployeepagelocators.addempbtnLocator).click();

})
