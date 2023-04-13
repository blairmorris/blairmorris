const nodemailer = require('nodemailer');
let testAccount, transporter;
(async () => {
    testAccount = await nodemailer.createTestAccount();
    transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass,
        }
    })
})()

exports.mail = async (req, res) => {
    console.log('email sending', req.body);
    try {
        if (req.body.name && req.body.email && req.body.message) {
            const info = await transporter.sendMail({
                from: `${req.body.name}<${req.body.email}>`, // sender address
                to: "edward@blairmorris.com", // list of receivers
                subject: req.body.requestResume ? 'Resume request from BlairMorris.com' : 'Email from BlairMorris.com', // Subject line
                text: req.body.message, // plaintext body
                html: `<b>${req.body.message}</b>`, // html body
            })
            console.log("Message sent: %s", info.messageId);
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
            res.sendStatus(200);
        } else {
            res.sendStatus(400);
        }
    } catch (e) {
        res.sendStatus(500);
    }
};