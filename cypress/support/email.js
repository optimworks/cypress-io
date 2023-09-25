const nodemailer = require("nodemailer")
require("setimmediate")

const pickupDate = "2023-09-28"
const pickUpTime = "10:00 AM"
const returnDate = "2023-10-02"
const returnTime = "11:00 AM"
const pickUpBranch = "Branch A"
const returnBranch = "Branch B"
const carName = "Car Model X"
const carType = "Sedan"
const carTotalPrice = "$500.00"
const emailAddress = "user@example.com"
const firstName = "John"
const lastName = "Doe"
const randomNum = "123"
const phoneNumber = "123-456-7890"
const masterCard = "************1234"
const reservationNumber = "123456789"
const isCancelledReservation = false
const status = "Success"

const htmlBody = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reservation Details</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #FEFEFE;
            margin: 0;
            padding: 0;
        }

        h1 {
            text-align: center;
            color: #DE150E;
        }

        h2 {
            font-weight: bold;
            color: #333;
        }

        table {
            width: 80%;
            margin: 0 auto;
            border-collapse: collapse;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        table, th, td {
            border: 1px solid #ccc;
        }

        th, td {
            padding: 10px;
            text-align: left;
        }

        th {
            background-color: #f2f2f2;
        }

        tr:nth-child(even) {
            background-color: #f2f2f2;
        }

        strong {
            font-weight: bold;
        }

        .input-container {
            margin-top: 20px;
            text-align: center;
        }       
    </style>
</head>
<body>
 <div style="max-width: 600px; margin: 0 auto; background-color: #FEFEFE; padding: 20px; border-radius: 5px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
    <h1>Cypress Automation Test Results</h1>
    <h2>Reservation Details</h2>
    <table>
        <tr>
            <td><strong>Pick-Up Date:</strong></td>
            <td>${pickupDate}</td>
        </tr>
		<tr>
            <td><strong>Pick-Up Date:</strong></td>
            <td>${pickUpTime}</td>
        </tr>
        <tr>
            <td><strong>Return Date:</strong></td>
            <td>${returnDate}</td>
        </tr>
        <tr>
            <td><strong>Return Time:</strong></td>
            <td>${returnTime}</td>
        </tr>
        <tr>
            <td><strong>Pick-Up Location:</strong></td>
            <td>${pickUpBranch}</td>
        </tr>
        <tr>
            <td><strong>Return Location:</strong></td>
            <td>${returnBranch}</td>
        </tr>
        <tr>
            <td><strong>Vehicle Name:</strong></td>
            <td>${carName}</td>
        </tr>
        <tr>
            <td><strong>Vehicle Type:</strong></td>
            <td>${carType}</td>
        </tr>
        <tr>
            <td><strong>Vehicle Total Price:</strong></td>
            <td>${carTotalPrice}</td>
        </tr>
        <tr>
            <td><strong>Email:</strong></td>
            <td>${emailAddress}</td>
        </tr>
        <tr>
            <td><strong>First Name:</strong></td>
            <td>${firstName}</td>
        </tr>
        <tr>
            <td><strong>Last Name:</strong></td>
            <td>${lastName}${randomNum}</td>
        </tr>
        <tr>
            <td><strong>Phone Number:</strong></td>
            <td>${phoneNumber}</td>
        </tr>
        <tr>
            <td><strong>Card Number:</strong></td>
            <td>${masterCard}</td>
        </tr>
        <tr>
            <td><strong>Reservation Number:</strong></td>
            <td>${reservationNumber}</td>
        </tr>
        <tr>
            <td><strong>Is Reservation Cancelled:</strong></td>
            <td>${isCancelledReservation ? "Yes" : "No"}</td>
        </tr>
        <tr>
            <td><strong>Test Status:</strong></td>
            <td>${status}</td>
        </tr>
    </table>
</body>
</html>
`
const transporter = nodemailer.createTransport({
	host: "smtp.mandrillapp.com",
	port: 587,
	auth: {
		user: "nikhil.pachipala@optimworks.com",
		pass: "md-LyQfyZNT5ES6XmFTRoQJRQ"
	}
})

const mailOptions = {
	from: "nikhil.pachipala@globecar.ca",
	to: ["nikhil.pachipala@optimworks.com", "sasank.brundavanam@optimworks.com"],
	subject: "Sending email from Cypress",
	html: htmlBody
}

transporter
	.sendMail(mailOptions)
	.then((info) => {
		console.log(`Email sent: ${info.response}`)
	})
	.catch((error) => {
		console.error(`Error sending email: ${error}`)
	})
