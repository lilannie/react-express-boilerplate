const path = require('path'),
  express = require('express'),
  app = express();

app.use(express.static(path.resolve('public')));
app.set('view engine', 'html');

app.get('*', (req, res) => {
	res.sendFile(path.resolve('public', 'index.html'));
});

app.listen(3000, function () {
	console.log('Express server is up on port 3000');
});
