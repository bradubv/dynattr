var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var mongojs = require('mongojs');
var db = mongojs('dynattr', ['dynobjects']);

var options = {
    root: __dirname
}
app.get('/', function (req, res) {
  res.sendFile("index.html", options);
});

app.post('/object', function(req, res) {
    db.dynobjects.save(req.body);
    res.send('Got a POST request');
});

app.listen(3000, function () {
  console.log('DynAttr app listening on port 3000!');
});