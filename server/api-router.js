module.exports = apiRouter => {

	apiRouter.route('/').get((req, res) => {
		res.render('index.html');
	});

	return apiRouter;
};