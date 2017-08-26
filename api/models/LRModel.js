const vogels = require('vogels');
const Joi = require('joi');

const LoadReceipt = vogels.define('LoadReceipt', {
      hashKey: 'id',
      timestamps: true,

      schema: {
              id: vogels.types.uuid(),
              name: Joi.string(),
              created_date: Joi.number().integer().min(1900)
            },

      tableName: 'load_receipts'
    // Use full names, lower case and separated by hyphen for table names.
    //  Dynamodb has no namespacing. This is very crucial
});

module.exports = LoadReceipt;
