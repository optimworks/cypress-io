// Cypress.Commands.add("sendEmail", (to, subject, text) => {
// 	const apiKey =
// 		"990a91080f3b312c327acbd404c097ade84aa0dd3b68992c8f21dce8afc26b4d"
// 	const mailSlurpApiUrl = "https://api.mailslurp.com"

// 	const emailData = {
// 		to,
// 		subject,
// 		text,
// 		from: "sasank.brundavanam@optimworks.com"
// 	}

// 	return cy
// 		.request({
// 			method: "POST",
// 			url: `${mailSlurpApiUrl}/sendEmail`,
// 			headers: {
// 				"Content-Type": "application/json",
// 				"x-api-key": apiKey
// 			},
// 			body: emailData
// 		})
// 		.then((response) => {
// 			expect(response.status).to.eq(201)
// 			// if (response.status !== 200) {
// 			// 	throw new Error(`Failed to send email: ${response.body.message}`)
// 			// }
// 		})
// })

const nodemailer = require("nodemailer")

Cypress.Commands.add("sendEmailWithMandrill", () => {
	const transporter = nodemailer.createTransport({
		host: "smtp.mandrillapp.com",
		port: 587,
		auth: {
			user: "YOUR_SMTP_USERNAME", // Mandrill SMTP Username
			pass: "YOUR_SMTP_PASSWORD" // Mandrill SMTP Password
		}
	})

	const mailOptions = {
		from: "cypress_test@gmail.com", // From address
		to: "nikhil.pachipala@optimworks.com", // To address
		subject: "sending email from cypress",
		text: "Hi your cypress tests are executed"
	}

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			reject(error)
		} else {
			resolve(info)
		}
	})
})
