var express = require('express')
var app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var count = 0;

app.get('/', function(req, res, next) {
	console.log(" GET REQUEST WORKING ");
	res.send("this the site");
});

app.post('/', function(req, res, next) {
	console.log(" POST REQUEST WORKING ");
	count += 1;
	res.send(String(count));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
