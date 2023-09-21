/// <reference types="cypress"/>
describe("Demo Test", () => {
  it("login", () => {
    cy.launchUrl(Cypress.env("url"))
    cy.login(Cypress.env("username"), Cypress.env("password"))
  })
})
