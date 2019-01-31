var express = require('express');
var app = express();


//Serving CSS File
app.use(express.static('public'));


//Serving HTML Page
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
  });


//Listen to Port Server
app.listen(3000);
console.log('You are listening to port 3000');