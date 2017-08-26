'use strict';

var kafka = require('kafka-node'),
    Producer = kafka.Producer,
    KeyedMessage = kafka.KeyedMessage,
    client = new kafka.Client(),
    producer = new Producer(client),
    logger = require('./config/logger'),
    km = new KeyedMessage('key', 'message'),
    payloads = [
        { topic: 'topic1', messages: 'Testing a new payload', partition: 0 },
        { topic: 'topic2', messages: ['hello', 'world', km] }
    ];

producer.on('ready', function () {
    producer.send(payloads, function (err, data) {
        logger.log(data);
    });
});
 
producer.on('error', function (err) {})