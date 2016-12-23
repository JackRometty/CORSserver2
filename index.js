var express = require('express')
var fs = require('fs')
var app = express()

function storeCount(count) {
        var date = new Date();
        var str = count + " - " + date + "\n";
        fs.appendFile("data.txt", str, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("successful save to text file");
        });
}

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
                if (count%20 == 0) {
                        storeCount(count);
                }
        }
        res.send(String(count));
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})

