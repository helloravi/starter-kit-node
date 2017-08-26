'use strict';

const lRController = require('../controllers/LRController');
    
module.exports = function (app) {
    app.route('/lrs').get(lRController.list_all_lrs).post(lRController.create_a_lr);
};

