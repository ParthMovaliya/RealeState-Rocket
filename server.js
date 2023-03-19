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

// Routs
// app.use("/api/v1", require("./Router/mailRouter"));

// ========================================Nodemailer Start========================================

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "dummy.parth55@gmail.com",
        pass: "kbubgajoujtxromh",
    },
});

// let mailOptions = {
//     from: '"Parth Movaliya 👻" <dummy.parth55@gmail.com>', // sender address
//     to: "parthmovaliya55@gmail.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
// };

app.post("/api/v1/get-a-cash-offer", async (req, res) => {
    await transporter.sendMail(
        {
            from: "dummy.parth55@gmail.com", // sender address
            to: "dummy.parth55@gmail.com", // list of receivers
            subject: "Property ✔", // Subject line

            text: `Name: ${req.body.firstName + " " + req.body.lastName} email:${req.body.email} Phone Number: ${req.body.phoneNumber} Address:${req.body.street + ", " + req.body.city + ", " + req.body.state + ", " + req.body.zipCode}`, // plain text body

            html:
                `<p> 
            <hr>
            Name: ${req.body.firstName + " " + req.body.lastName} 
            <hr> 
            email:${req.body.email}<hr>Phone Number: ${req.body.phoneNumber} 
            <hr> 
            Address:${req.body.street + ", " + req.body.city + ", " + req.body.state + ", " + req.body.zipCode}
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
                    message: "Mail Send!!"
                })
            };

        })
})

// ========================================Nodemailer End==========================================



app.listen(process.env.PORT, () => {
    console.log(`Web run At PORT: ${process.env.PORT}`.bgCyan.white);
});