// Accesses the environment variables from .env file at the root of the folder or from the docker environment
require('dotenv').config();

var port = process.env.PORT;
const express = require("express"),
	createtables = require("./config/createtables.js"),
	vogels = require('vogels'),
    morgan = require('morgan'),
    logger = require('./config/logger'),
    app = express(),
    bodyParser = require("body-parser");

createtables();

// Kafka consumer is defined
const kafka = require('kafka-node'),
		kafkaRouter = require('./api/routes/kafka-router'),
        Consumer = kafka.Consumer,
        consumerClient = new kafka.Client(process.env.KAFKA_CLIENT),
		consumer = new Consumer(consumerClient,
			[{ topic: 'name', offset: 0}],
			{
				autoCommit: false
			}
		);

consumer.on('message', function (message) {
        kafkaRouter.onMessage(message);
});

consumer.on('error', function (err) {
        kafkaRouter.onError(err);
})

consumer.on('offsetOutOfRange', function (err) {
        kafkaRouter.offsetOutOfRange(err);
})
                

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var pingroutes = require('./api/routes/PingRoute');
pingroutes(app);

//We are using a different port for testing because we might want to have the development server ON when we run tests
if (process.env.NODE_ENV === "test") {
    port = 3002
}

// Log http requests
app.use(morgan('dev', {
    skip: function (req, res) {
        return res.statusCode < 400
    }, stream: process.stderr
}));

app.use(morgan('dev', {
    skip: function (req, res) {
        return res.statusCode >= 400
    }, stream: process.stdout
}));


var routes = require('./api/routes/LRRoutes');
routes(app);


app.listen(port, function(){
    logger.info('Example app listening on port ' + port);
});

// Donot touch anything above unless you know what you are doing

createtables();

var routes = require('./api/routes/LRRoutes');
routes(app);


module.exports = app; // for testing

