var express = require('express');
var app = express();
//var path = require('path');

// viewed at http://localhost:8000
app.use(express.static(__dirname + '/'))
app.listen(8000);
console.log("Runs on 8000")