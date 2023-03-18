const nodemailer = require("nodemailer");
const sendEmail = require("../Utils/sendMail");
const { EMAIL, PASS } = require("./env");

exports.getCashOffer = async (req, res) => {
    const sendMail = (req, res) => {

        let config = {
            service: 'gmail',
            auth: {
                user: EMAIL,
                pass: PASS
            }
        };

        let transporter = nodemailer.createTransport(config);

        let mailOptions = {
            from: EMAIL,
            to: "parthmovaliya55@gmail.com",
            subject: "Hello",
            text: "Hello World"
        };

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.log(err);
            } else {
                console.log("email Send");
            }
        })

        res.status(201).json("")
    }
};

// console.log(req.body);
    // res.status(200).send({
    //     success: true,
    //     // Message: `email sent to ${req.email} successfully`,
    //     message: `We Will Contact You Soon!!`
    // });