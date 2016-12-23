var express = require('express')
var app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var count = 0;

app.get('/', function(req, res, next) {
        console.log(" GET REQUEST ");
        var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        console.log(ip);
        res.send("fuck yes");
});

app.post('/', function(req, res, next) {
        console.log(" POST REQUEST ");
        var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        console.log(ip);
        console.log(req.get('origin'));
        if (req.get('origin') == "https://jackrometty.github.io") {
                count += 1;
        }
        res.send(String(count));
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})

