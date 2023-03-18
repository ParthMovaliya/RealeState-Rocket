const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
    const transporter = nodemailer.createTransport({
        service: gmail,
        auth: {
            user: "dummy.parth55@gmail.com",
            pass: jcarnxapjxsfknnc,
        },
    });

    const mailOptions = {
        // from: process.env.SMTP_MAIL,
        // to: options.email,
        from: '"Parth Movaliya 👻" <dummy.parth55@gmail.com>',
        to: options.email,
        subject: "Property",
        text: options.message,
    };

    await transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            console.log(`SendMail Error: ${err}`);
        } else {
            console.log(`Mail Send Done To ${options.email}`);
        }
    })

};

module.exports = sendEmail;