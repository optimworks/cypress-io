//product page locators
const proudctPage = '[class="product_label"]'
const verifyProdPage = "Products"
const itemInList = '[class="inventory_item_name"]'
const item = "Sauce Labs Fleece Jacket"
const itemPrice = '[class="inventory_item_price"]'
const vrfyItemPrice = "49.99"
const itemPage = '[class="header_label"]'
const verifyItemPage = "Swag Labs"
const verifyItem = '[class="inventory_details_name"]'
const verifyItemPrice = '[class="inventory_details_price"]'
const addBtn = '[class="btn_primary btn_inventory"]'
const removeBtn = '[class="btn_secondary btn_inventory"]'
const backBtn = '[class="inventory_details_back_button"]'
const cartBadge = '[class="fa-layers-counter shopping_cart_badge"]'
const cartBtn = '[data-icon="shopping-cart"]'
//cart page locators
const verifyCartPage = '[class="subheader"]'
const cartPageTxt = "Your Cart"
const continueBtn = '[class="btn_secondary"]'
const checkOutBtn = '[class="btn_action checkout_button"]'
const cartRmvBtn = '[class="btn_secondary cart_button"]'
//info page locators
const firstName = '[data-test="firstName"]'
const lastName = '[data-test="lastName"]'
const zipcode = '[data-test="postalCode"]'
const contnuBtn = '[class="btn_primary cart_button"]'
const infoPageTxt = "Checkout: Your Information"
const checkErrorMessage = '[data-test="error"]'
const firstNameError = "Error: First Name is required"
const lastNameError = "Error: Last Name is required"
const zipcodeError = "Error: Postal Code is required"
//overview page locators
const verifyOverviewPageTxt = "Checkout: Overview"
const cancelBtn = '[class="cart_cancel_link btn_secondary"]'
const finishBtn = '[class="btn_action cart_button"]'
//thank you page locators
const verifyFinalPageTxt = "Finish"
const textMsg = '[class="complete-header"]'
const finalPageTxt = "THANK YOU FOR YOUR ORDER"

//commands
Cypress.Commands.add("selectItem", () => {
	cy.get(proudctPage).should("contain", verifyProdPage).and("be.visible")
	cy.get(itemPrice).contains(vrfyItemPrice)
	cy.get(itemInList).contains(item).click({ multiple: true })
})

Cypress.Commands.add("itemPage", () => {
	cy.get(itemPage).should("contain", verifyItemPage).and("be.visible")
	cy.get(backBtn).should("be.visible").and("not.be.disabled")
	cy.get(verifyItem).should("contain", item).and("be.visible")
	cy.get(verifyItemPrice).should("contain", vrfyItemPrice).and("be.visible")
	cy.get(addBtn).should("be.visible").and("not.be.disabled").click()
	cy.get(removeBtn).invoke("text").should("eq", "REMOVE")
	cy.get(cartBadge).invoke("text").should("eq", "1")
	cy.get(cartBtn).should("be.visible").and("not.be.disabled").click()
})

Cypress.Commands.add("goToCartPage", () => {
	cy.get(verifyCartPage).should("contain", cartPageTxt).and("be.visible")
	cy.get(cartRmvBtn).should("not.be.disabled")
	cy.get(continueBtn).should("not.be.disabled")
	cy.get(itemInList).contains(item).should("be.visible")
	cy.get(itemPrice).contains(vrfyItemPrice).should("be.visible")
	cy.get(checkOutBtn).should("be.visible").and("not.be.disabled").click()
})

Cypress.Commands.add("goToInfoPage", (fistName, lstName, postalCode) => {
	cy.get(verifyCartPage).should("contain", infoPageTxt).and("be.visible")
	cy.get(contnuBtn).should("be.visible").and("not.be.disabled").click()
	cy.get(checkErrorMessage).should("contain", firstNameError)
	cy.get(firstName).clear().type(fistName).should("have.value", fistName)
	cy.get(contnuBtn).should("be.visible").and("not.be.disabled").click()
	cy.get(checkErrorMessage).should("contain", lastNameError)
	cy.get(lastName).clear().type(lstName).should("have.value", lstName)
	cy.get(contnuBtn).should("be.visible").and("not.be.disabled").click()
	cy.get(checkErrorMessage).should("contain", zipcodeError)
	cy.get(zipcode).clear().type(postalCode).should("have.value", postalCode)
	cy.get(contnuBtn).should("be.visible").and("not.be.disabled").click()
})

Cypress.Commands.add("goToOverviewPage", () => {
	cy.get(verifyCartPage)
		.should("contain", verifyOverviewPageTxt)
		.and("be.visible")
	cy.get(itemInList).contains(item).should("be.visible")
	cy.get(itemPrice).contains(vrfyItemPrice).should("be.visible")
	cy.get(cancelBtn).should("be.visible").and("not.be.disabled")
	cy.get(finishBtn).should("be.visible").and("not.be.disabled").click()
})

Cypress.Commands.add("goToSubmitPage", () => {
	cy.url().should("include", "/v1/checkout-complete.html")
	cy.get(verifyCartPage).should("contain", verifyFinalPageTxt).and("be.visible")
	cy.get(textMsg).should("contain", finalPageTxt).and("be.visible")
})
