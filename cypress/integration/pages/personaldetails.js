var personalcustomdetailspagelocators = require('../locators/personalcustomdetailspagelocators.js');
Cypress.Commands.add('personalcustomdetails', (id, driver, month, year, b, gender, ssn, sin, mstatus, ctry, dmonth, dyear, c, nname, mservice, bgroup) => {
    cy.get(personalcustomdetailspagelocators.personalbtnLocator).click({ force: true });
    cy.get(personalcustomdetailspagelocators.otheridLocator).clear().type(id);
    cy.get(personalcustomdetailspagelocators.drivinglicLocator).clear().type(driver);
    cy.get(personalcustomdetailspagelocators.licenseexpdateLocator).click();
    cy.get(personalcustomdetailspagelocators.selectmonthLocator).select(month);
    cy.get(personalcustomdetailspagelocators.selectyearLocator).select(year);
    cy.contains('a', b).click();
    cy.get(gender).click();
    cy.get(personalcustomdetailspagelocators.ssnnoLocator).clear().type(ssn);
    cy.get(personalcustomdetailspagelocators.sinnoLocator).clear().type(sin);
    cy.get(personalcustomdetailspagelocators.maritalstLocator).select(mstatus);
    cy.get(personalcustomdetailspagelocators.countryLocator).select(ctry);
    cy.get(personalcustomdetailspagelocators.dobLocator).click();
    cy.get(personalcustomdetailspagelocators.dobmnthLocator).select(dmonth);
    cy.get(personalcustomdetailspagelocators.dobyearLocator).select(dyear);
    cy.contains('a', c).click();
    cy.get(personalcustomdetailspagelocators.ncknameLocator).clear().type(nname);
    cy.get(personalcustomdetailspagelocators.militarysrvceLocator).clear().type(mservice);
    cy.get(personalcustomdetailspagelocators.personalsaveLocator).click();
    cy.get(personalcustomdetailspagelocators.editbtncustomLocator).click();
    cy.get(personalcustomdetailspagelocators.bloodgrpLocator).select(bgroup);
    cy.get(personalcustomdetailspagelocators.savebtncustomLocator).click();
})