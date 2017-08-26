'use strict';

const kafka = require('kafka-node'),
	Producer = kafka.Producer,
	client = new kafka.Client(process.env.KAFKA_CLIENT),
	producer = new Producer(client);

const Lr = require('../models/LRModel');

exports.list_all_lrs = function (req, res) {
	Lr.scan().exec((err, task) => {
		if (err) {
			logger.log('Error running scan', err);
		} else {
			// res.json(task);
			var sentMessage = JSON.stringify(task);
			var payloads = [
				{ topic: "name", messages:sentMessage , partition: 0 }
			];
			producer.send(payloads, function (err, data) {
					// res.json(data);
				res.json(task);
			});
    
		}
	});
};


exports.create_a_lr = function (req, res) {
	Lr.create(req.body, { overwrite: false }, (err) => { 
		if (err) {
			res.send(err);
		} else {
			res.sendStatus(200);
		}
	});
};
