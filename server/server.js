var express = require('express');
var path = require('path');

// Create our app
var app = express();

app.use(express.static('../public'));

app.all('*', function (req, res) {
    res.set('Content-Type', 'text/html');
    res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
});

app.listen(3000, function () {
  console.log('Express server is up on port 3000');
});
