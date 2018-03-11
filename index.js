var express = require('express');
var app = express();

app.get('/index/:user', function(req, res) {
   res.send('name: ' + req.params.name);
});

app.get('*', function(req, res){
   res.send('Sorry, this is an invalid URL.');
});

app.listen(3000);