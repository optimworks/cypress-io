var pcloc = require('../locators/pimloc.js');
Cypress.Commands.add('addempdetails', (fname, mname, lname, number, path, uname, pwd, repwd, selected) => {
   cy.get(pcloc.pimLocator).should('be.visible').click();
   cy.contains(pcloc.addempLocator).click({ force: true });
   cy.get(pcloc.fnameLocator).type(fname);
   cy.get(pcloc.mnameLocator).type(mname);
   cy.get(pcloc.lnameLocator).type(lname);
   cy.get(pcloc.empidLocator).clear().type(number);
   cy.get(pcloc.photoLocator).attachFile(path);
   cy.get(pcloc.checkboxLocator).click();
   cy.get(pcloc.checkunameLocator).type(uname);
   cy.get(pcloc.checkpwdLocator).type(pwd);
   cy.get(pcloc.checkrepwdLocator).type(repwd);
   cy.get(pcloc.statusLocator).select(selected);
   cy.get(pcloc.addempbtnLocator).click();
})
