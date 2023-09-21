const { defineConfig } = require("cypress")

module.exports = defineConfig({
  projectId: "8b7hwy",
  env: {
    url: "https://www.saucedemo.com/v1/",
    username: "standard_user",
    password: "secret_sauce",
  },
  e2e: {
    setupNodeEvents(on, config) {},
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
  },
})
