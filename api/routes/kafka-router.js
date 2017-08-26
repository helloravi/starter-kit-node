
const logger = require('../../config/logger');

module.exports = {

        onMessage: function (message) {
                        logger.info(message);
                    },

        onError: function (error) {
                        logger.info('Error:',error);
                    },

        onOffsetOutOfRange: function (OffsetOutOfRange) {
                        logger.info('offsetOutOfRange:',OffsetOutOfRange);
                    },
}
