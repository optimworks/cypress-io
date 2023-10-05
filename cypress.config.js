const { defineConfig } = require("cypress")

module.exports = defineConfig({
	projectId: "8b7hwy",
	defaultCommandTimeout: 60000,
	pageLoadTimeout: 120000,
	requestTimeout: 150000,
	responseTimeout: 150000,
	env: {
		url: "https://www.saucedemo.com/v1/",
		username: "standard_user",
		password: "secret_sauce",
		DEVICE_TYPE:"web",

		host: "https://globecar.testrail.io",
		name: "nikhil.pachipalla@optimworks.com",
		passwd: "15b81@05B4",
		projectId: 1,
		runId: 2,
		apikey: "2gfVJ102JNcejE3p9VrH-ko8X5h4sKS6r0/t7sxjV"
	},
	e2e: {
		setupNodeEvents(on, config) {},
		specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"
	}
})
