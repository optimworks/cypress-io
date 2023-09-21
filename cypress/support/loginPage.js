//locators
const userName = '[type="text"]'
const password = '[type="password"]'
const loginBtn = '[type="submit"]'
const homePageLogo = '[class="login_logo"]'

//commands
Cypress.Commands.add("launchUrl", (url) => {
  cy.visit(url)
  cy.url().should("include", "/v1/")
  cy.get(homePageLogo).should("be.visible")
})

Cypress.Commands.add("login", (usrname, passwd) => {
  cy.get(userName).clear().type(usrname).should("have.value", usrname)
  cy.get(password).clear().type(passwd).should("have.value", passwd)
  cy.get(loginBtn).should("be.visible").and("not.be.disabled").click()
  cy.url().should("include", "inventory.html")
})
