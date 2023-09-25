Cypress.Commands.add("sendSmsWithTwilio", (to, body) => {
	const accountSid = "AC9286b3af7a9b3e8acc71e8d11bcdd17c"
	const authToken = "e6717f24dcedbbf1a9d7f0687d7f3f86"
	const twilioPhoneNumber = "+18065573428"
	const twilioApiUrl = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`
	const data = {
		To: to,
		From: twilioPhoneNumber,
		Body: body
	}
	cy.request({
		method: "POST",
		url: twilioApiUrl,
		auth: {
			username: accountSid,
			password: authToken
		},
		form: true,
		body: data
	})
})

Cypress.Commands.add("testTitle", () => {
	let test = Cypress.currentTest.title
	return test
})

Cypress.Commands.add("testStatus", () => {
	const status = Cypress.mocha.getRunner().suite.ctx.currentTest.state
	return status
})
