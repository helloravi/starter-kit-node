'use strict';

var kafka = require('kafka-node'),
    Consumer = kafka.Consumer,
    client = new kafka.Client('localhost:2181/'),
    logger = require('./config/logger'),
    consumer = new Consumer(
        client,
        [
            { topic: 'topic1', partition: 0 }
        ],
        {
            autoCommit: false
        }
    );
    
    consumer.on('message', function (message) {
        logger.log(message.value);
    });