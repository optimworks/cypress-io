/// <reference types="cypress"/>
import * as utilities from "../utilities/datautilities"

describe("Demo Test", () => {
  let info
  beforeEach(() => {
    info = utilities.getContactInfo()
    cy.launchUrl(Cypress.env("url"))
    cy.login(Cypress.env("username"), Cypress.env("password"))
  })
  it("select item", () => {
    cy.selectItem()
    cy.itemPage()
    cy.goToCartPage()
    cy.goToInfoPage(info[0], info[1], info[2])
    cy.goToOverviewPage()
    cy.goToSubmitPage()
  })
})
