var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('hello world!');
});

/*app.get('/:id', function(req, res) {
	res.send('ID you have chosen is: ' + req.params.id);
});*/

app.listen(3000);

app.use(function (req, res, next) {
	res.status(404).send('ERROR 404');
});