const path = require('path'),
    express = require('express'),
    app = express();

app.use(express.static('../public'));

app.set('view engine', 'ejs');

app.route('*')
    .get((req, res) => {
       res.render('index');
    });

app.listen(3000, function () {
  console.log('Express server is up on port 3000');
});
