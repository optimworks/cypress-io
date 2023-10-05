/// <reference types="cypress"/>
describe("Demo Test", () => {
	it("login", () => {
		cy.setViewportBasedOnDevice(Cypress.env("DEVICE_TYPE"))
		cy.launchUrl(Cypress.env("url"))
		cy.login(Cypress.env("username"), Cypress.env("password"))
	})
})
