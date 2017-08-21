module.exports = apiRouter => {

	apiRouter.route('/').get((req, res) => {
		res.render('api');
	});

	return apiRouter;
};