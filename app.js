var express = require('express');
var app = express();


var http = require('http');

app.get('/news', function (req, res) {
  res.send('Trump v. Clinton. FML.');
});

app.get('/', function (req, res) {
	console.log(res.status);
  res.send('Welcome friend!!!');
});



app.use("/special/*", function(req, res, next){
	console.log("you are in the special place");
	next();
});



app.use( function(req, res, next){
	console.log('Guess what? It\'s gonna be May');
	next();

});









app.listen(3000, function () {
  console.log('Server listening on port 3000!');
});

