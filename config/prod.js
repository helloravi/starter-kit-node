export default {
	kafka: {
		host: 'localhost',
		port: 9093,
	},
	kafkabroker: {
 		requireAcks: 1,
 		ackTimeoutMs: 100,
 		partitionerType: 2 
	}
}
