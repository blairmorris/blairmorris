var mail = require('nodemailer').mail;

exports.mail = function(req, res) {
    console.log('email sending', req.body);
    if(req.body.name && req.body.email && req.body.message){
        mail({
            from: req.body.name + "<"+req.body.email+">", // sender address
            to: "edward@blairmorris.com", // list of receivers
            subject: req.body.requestResume ? "Resume request from BlairMorris.com" : "Email from BlairMorris.com", // Subject line
            text: req.body.message, // plaintext body
            html: "<b>"+req.body.message+"</b>" // html body
        }, function(error, response){
            console.log('callback', error, response);
        });
        res.send(200);
    } else {
        res.send(400);
    }
};