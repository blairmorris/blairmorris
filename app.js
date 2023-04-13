const express = require('express');
const http = require('http');
const path = require('path');

const app = express();
const contact = require('./modules/contact.js');

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/contact', contact.mail);

http.createServer(app).listen(app.get('port'), () => {
	console.log('Express server listening on port ' + app.get('port'));
});

