var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var path = require('path');

var routes = require('./router');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, '..', 'public'));
app.use(express.static(path.join(__dirname, '..', 'public')));

require('./router')(app);

app.set('port', 8080);
app.listen(app.get('port'), function() {
    console.log('Express server listening on port 8080');
});
