var express = require('express');
var app = express();

app.use('/store', function(req, res, next) {
	console.log('I am between request and /store');
	next();
});

app.get('/', function(req, res) {
	console.log('GET for /');
	res.send('hello world!');
});

app.get('/store', function(req, res) {
	console.log('GET for /store');
	res.send('This is store');
});

app.listen(3000);

app.use(function (req, res, next) {
	res.status(404).send('ERROR 404');
});
