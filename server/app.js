const path = require('path'),
    express = require('express'),
    app = express(),
    apiRouter = require('./api-router')(express.Router()),
    mongoose = require('mongoose'),
	  bodyParser = require('body-parser'),

    mongodbURL = '';

mongoose.Promise = require('bluebird');
mongoose.connect(mongodbURL)
  .then(() => {
    console.log('Successfully connected to MongoDB');
  })
	.catch(error => {
		console.log('Error connecting to MongoDB');
		console.log(error);
		process.exit(1);
	});

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
