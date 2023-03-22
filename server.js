const express = require("express");
const dotenv = require("dotenv");
const color = require("colors");
const app = express();
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser")

//Dotenv Connect
dotenv.config();


//Middlerware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// ========================================Nodemailer Start========================================

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "dummy.parth55@gmail.com",
        pass: "kbubgajoujtxromh",
    },
});


app.post("/api/v1/get-a-cash-offer", async (req, res) => {
    await transporter.sendMail(
        {
            from: "dummy.parth55@gmail.com", // sender address
            to: "dummy.parth55@gmail.com", // list of receivers
            subject: "Get A Cash Offer! ✔", // Subject line

            text: `Name: ${req.body.firstName + " " + req.body.lastName} email:${req.body.email} Phone Number: ${req.body.phoneNumber} Address:${req.body.street + ", " + req.body.city + ", " + req.body.state + ", " + req.body.zipCode}`, // plain text body

            html:
                `<p> 
            <hr>
            Name: ${req.body.firstName + " " + req.body.lastName} 
            <hr> 
            email:${req.body.email}<hr>Phone Number: ${req.body.phoneNumber} 
            <hr> 
            Address:${req.body.street + ", " + req.body.city + ", " + req.body.state + ", " + req.body.zipCode}
            <hr>
            Type of Property: ${req.body.propertyType}
            <hr>
            Number of Bedrooms: ${req.body.numberOfBedrooms}, Number of Bathrooms: ${req.body.numberOfBathrooms} and Occupancy: ${req.body.occupancy}
            <hr>
            Approx SQ. Footage: ${req.body.approxSQFootafe}
            <hr>
            Why are you selling?: ${req.body.whySelling}
            <hr>
            What repairs are needed?: ${req.body.repairsNeeded}
            <hr>
            Other Relevant Notes: ${req.body.otherNotes}
            <hr>
            <br> 
            </p>`, // html body
        },
        (err, info) => {
            if (err) {
                console.log(err);
                res.status(500).send({
                    success: false,
                    message: "Mail Send Error"
                })
            } else {
                res.status(201).send({
                    success: true,
                    message: "Cash Offer Mail Send!!"
                })
            };

        })
})
app.post("/api/v1/contact", async (req, res) => {
    await transporter.sendMail(
        {
            from: "dummy.parth55@gmail.com", // sender address
            to: "dummy.parth55@gmail.com", // list of receivers
            subject: "Contact Me", // Subject line

            text: `Name: ${req.body.name} email:${req.body.email} Phone Number: ${req.body.phoneNumber} messaage: ${req.body.message}`, // plain text body

            html:
                `<p> 
            <hr>
            Name: ${req.body.name}
            <hr> 
            email: ${req.body.email}
            <hr>
            Phone Number: ${req.body.phoneNumber} 
            <hr> 
            Message: ${req.body.message}
            <hr>
            <br> 
            </p>`, // html body
        },
        (err, info) => {
            if (err) {
                console.log(err);
                res.status(500).send({
                    success: false,
                    message: "Mail Send Error"
                })
            } else {
                res.status(201).send({
                    success: true,
                    message: "Contact Mail Send!!"
                })
            };

        })
})

// ========================================Nodemailer End==========================================


app.listen(process.env.PORT, () => {
    console.log(`Web run At PORT: ${process.env.PORT}`.bgCyan.white);
});