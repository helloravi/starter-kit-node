'use strict';

module.exports = function (app) {
	// Health Check Route
	app.route('/ping').get((req, res) => {
		res.send({
			status: 'OK',
			message: 'pong'
		})
	});	
};

