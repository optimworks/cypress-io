/// <reference types="cypress"/>
import * as utilities from "../utilities/datautilities"

describe("Demo Test", () => {
	let info
	beforeEach(() => {
		info = utilities.getContactInfo()
		cy.setViewportBasedOnDevice(Cypress.env("DEVICE_TYPE"));
		cy.launchUrl(Cypress.env("url"))
		cy.login(Cypress.env("username"), Cypress.env("password"))
	})
	it("30:select item", () => {
		cy.selectItem()
		cy.itemPage()
		cy.goToCartPage()
		cy.goToInfoPage(info[0], info[1], info[2])
		cy.goToOverviewPage()
		cy.goToSubmitPage()
	})
	afterEach(() => {
		cy.testStatus().then((status) => {
			if (status === "failed") {
				cy.testTitle().then((testTitle) => {
					cy.sendSmsWithTwilio(
						"+919553953737",
						`Test Case "${testTitle}" has failed, so the items are cancelled.`
					).then((response) => {
						expect(response.status).to.eq(201)
					})
				})
			}
		})
		cy.testStatus().then((status) => {
			cy.addResult().then((caseId) => {
				if (status === "failed") {
					cy.publishToTestRail(caseId, 5)
				} else {
					cy.publishToTestRail(caseId, 1)
				}
			})
		})

		// cy.addResult().then((caseId) => {
		// 	const imageFileName = "test.png"
		// 	cy.addAttachmentToTestCase(caseId, imageFileName)
		// })
	})
})
