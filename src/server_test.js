var express = require('express');

var app = express();
var port = 8080;

app.use(express.static(__dirname));
app.use(express.static(__dirname + '/scripts'));
app.use(express.static(__dirname + '/styles'));
app.listen(port);
console.log('Nodejs tree boxes server is running on ' + port);
