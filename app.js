var express = require('express');
var swig = require('swig');
var app = express();
var http = require('http');
var locals = require('./testTemplate');

//To take out when site is "live":
swig.setDefaults({ cache: false });

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/news', function (req, res) {
  res.send('Trump v. Clinton. FML.');
});

app.get('/', function (req, res) {	
	res.render('index', {people: locals.people, title: locals.title});
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


