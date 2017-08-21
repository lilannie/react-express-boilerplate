const path = require('path'),
    express = require('express'),
    app = express(),
    apiRouter = require('./api-router')(express.Router()),
	  bodyParser = require('body-parser');

app.use(express.static('../public'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', apiRouter);

app.get('*', (req, res) => {
   res.render('index');
});

app.listen(3000, function () {
  console.log('Express server is up on port 3000');
});
