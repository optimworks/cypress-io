var pc = require('../locators/personal.js');
Cypress.Commands.add('personalcustomdetails', (id, driver, month, year, b, gender, ssn, sin, mstatus, ctry, dmonth, dyear, c, nname, mservice, bgroup) => {
    cy.get(pc.personalbtnLocator).click({ force: true });
    cy.get(pc.otheridLocator).clear().type(id);
    cy.get(pc.drivinglicLocator).clear().type(driver);
    cy.get(pc.licenseexpdateLocator).click();
    cy.get(pc.selectmonthLocator).select(month);
    cy.get(pc.selectyearLocator).select(year);
    cy.contains('a', b).click();
    cy.get(gender).click();
    cy.get(pc.ssnnoLocator).clear().type(ssn);
    cy.get(pc.sinnoLocator).clear().type(sin);
    cy.get(pc.maritalstLocator).select(mstatus);
    cy.get(pc.countryLocator).select(ctry);
    cy.get(pc.dobLocator).click();
    cy.get(pc.dobmnthLocator).select(dmonth);
    cy.get(pc.dobyearLocator).select(dyear);
    cy.contains('a', c).click();
    cy.get(pc.ncknameLocator).clear().type(nname);
    cy.get(pc.militarysrvceLocator).clear().type(mservice);
    cy.get(pc.personalsaveLocator).click();
    cy.get(pc.editbtncustomLocator).click();
    cy.get(pc.bloodgrpLocator).select(bgroup);
    cy.get(pc.savebtncustomLocator).click();
})