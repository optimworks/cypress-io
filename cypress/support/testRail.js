Cypress.Commands.add("publishToTestRail", (caseId, statusId) => {
	const testRunId = Cypress.env("runId")
	const testRailBaseUrl = Cypress.env("host")
	const apiUrl = `${testRailBaseUrl}//index.php?/api/v2/add_result_for_case/${testRunId}/${caseId}`
	const payload = {
		status_id: statusId,
		comment: `Automated test execution result from Cypress`
	}
	cy.request({
		method: "POST",
		url: apiUrl,
		auth: {
			username: "nikhil.pachipala@optimworks.com",
			password: "15b81@05B4"
		},
		headers: {
			"Content-type": "application/json"
		},
		body: payload
	}).then((response) => {
		expect(response.status).to.eq(200)
	})
})

// function base64StringToBlob(base64String, contentType) {
// 	const byteCharacters = atob(base64String)
// 	const byteArrays = []

// 	for (let offset = 0; offset < byteCharacters.length; offset += 512) {
// 		const slice = byteCharacters.slice(offset, offset + 512)
// 		const byteNumbers = new Array(slice.length)

// 		for (let i = 0; i < slice.length; i++) {
// 			byteNumbers[i] = slice.charCodeAt(i)
// 		}

// 		const byteArray = new Uint8Array(byteNumbers)
// 		byteArrays.push(byteArray)
// 	}

// 	return new Blob(byteArrays, { type: contentType })
// }

// Cypress.Commands.add("attachmentToTestRail", (caseId, attachmentBase64) => {
// 	const testRailBaseUrl = Cypress.env("host")
// 	const apiUrl = `${testRailBaseUrl}//index.php?/api/v2/add_attachment_to_case/${caseId}`
// 	const attachmentBlob = base64StringToBlob(attachmentBase64, "image/png")
// 	const formData = new FormData()
// 	formData.append("attachment", attachmentBlob, "image/png")

// 	cy.request({
// 		method: "POST",
// 		url: apiUrl,
// 		auth: {
// 			username: "nikhil.pachipala@optimworks.com",
// 			password: "15b81@05B4"
// 		},
// 		headers: {
// 			"Content-type": `multipart/form-data; boundary=${formData._boundary}`
// 		},
// 		body: formData
// 	}).then((response) => {
// 		expect(response.status).to.eq(200)
// 	})
// })

// Cypress.Commands.add("addAttachmentToTestCase", (caseId, filePath) => {
// 	const testRailBaseUrl = Cypress.env("host")
// 	const apiUrl = `${testRailBaseUrl}/index.php?/api/v2/add_attachment_to_case/${caseId}`

// 	cy.readFile(filePath).then((fileContents) => {
// 		if (!fileContents) {
// 			cy.log("Error: File contents are empty or file not found.")
// 			return
// 		}

// 		cy.log(fileContents) // Log the file contents

// 		cy.request({
// 			method: "POST",
// 			url: apiUrl,
// 			auth: {
// 				username: "nikhil.pachipala@optimworks.com",
// 				password: "15b81@05B4"
// 			},
// 			headers: {
// 				"Content-Type": "application/json"
// 			},
// 			formData: {
// 				attachment: {
// 					value: fileContents,
// 					options: {
// 						filename: filePath.split("/").pop() // Use the file name from the file path
// 					}
// 				}
// 			}
// 		}).then((response) => {
// 			if (response.status === 200) {
// 				cy.log("Attachment added successfully.")
// 			} else {
// 				cy.log("Failed to add attachment.")
// 				cy.log(`HTTP Status Code: ${response.status}`)
// 				cy.log("Response Body:", response.body)
// 			}
// 		})
// 	})
// })

// Cypress.Commands.add("addAttachmentToTestCase", (caseId, fileName) => {
// 	const testRailBaseUrl = Cypress.env("host")
// 	const apiUrl = `${testRailBaseUrl}/index.php?/api/v2/add_attachment_to_case/${caseId}`

// 	// Define the path to the screenshot directory
// 	const screenshotDir = "cypress/screenshots"

// 	// Use cy.readFile to read the file from the screenshots directory
// 	cy.readFile(`${screenshotDir}/${fileName}`, "binary").then((fileContents) => {
// 		if (!fileContents) {
// 			cy.log(`Error: File ${fileName} not found in ${screenshotDir}.`)
// 			return
// 		}

// 		cy.log(`File Contents: ${fileName}`) // Log the file contents

// 		// Use cy.request with 'multipart/form-data' content type
// 		cy.request({
// 			method: "POST",
// 			url: apiUrl,
// 			auth: {
// 				username: "nikhil.pachipala@optimworks.com",
// 				password: "15b81@05B4"
// 			},
// 			headers: {
// 				"Content-Type": "multipart/form-data"
// 			},
// 			body: {
// 				attachment: {
// 					value: fileContents,
// 					options: {
// 						filename: fileName
// 					}
// 				}
// 			}
// 		}).then((response) => {
// 			if (response.status === 200) {
// 				cy.log("Attachment added successfully.")
// 			} else {
// 				cy.log("Failed to add attachment.")
// 				cy.log(`HTTP Status Code: ${response.status}`)
// 				cy.log("Response Body:", response.body)
// 			}
// 		})
// 	})
// })

Cypress.Commands.add("addAttachmentToTestCase", (caseId, fileName) => {
	const testRailBaseUrl = Cypress.env("host")
	const apiUrl = `${testRailBaseUrl}/index.php?/api/v2/add_attachment_to_case/${caseId}`
	const screenshotDir = "cypress/screenshots"
	cy.readFile(`${screenshotDir}/${fileName}`, "binary").then((fileContents) => {
		if (!fileContents) {
			cy.log(`Error: File ${fileName} not found in ${screenshotDir}.`)
			return
		}

		cy.log(`File Contents: ${fileName}`) // Log the file contents

		cy.request({
			method: "POST",
			url: apiUrl,
			auth: {
				username: "nikhil.pachipala@optimworks.com",
				password: "15b81@05B4"
			},
			headers: {
				"Content-Type": "multipart/form-data"
			},
			body: {
				attachment: {
					value: fileContents,
					options: {
						filename: fileName
					}
				}
			}
		}).then((response) => {
			if (response.status === 200) {
				cy.log("Attachment added successfully.")
			} else {
				cy.log("Failed to add attachment.")
				cy.log(`HTTP Status Code: ${response.status}`)
				cy.log("Response Body:", response.body)
			}
		})
	})
})
