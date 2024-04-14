var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "", //sender mail
        pass: "", // sender mail password
    },
});

var mailOptions = {
    from: "", // sender mail
    to: "", // reciever mail
    subject: "", // subject
    text: "", // content
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Email sent: " + info.response);
    }
});
