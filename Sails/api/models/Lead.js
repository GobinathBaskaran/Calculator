/**
 * Lead.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  datastore: 'mongodb',
  tableName: 'PurchasedLeads',
  attributes: {
    firstName: { type: 'string' },
    lastName: { type: 'string' },
    email: { type: 'string', required: true, unique: true },
    mobile_Number: { type: 'string', required: true, unique: true },
    leadId: { type: 'ref', columnType: 'objectid' },
    UserId: { type: 'ref', columnType: 'objectid', required: true, }
  },
  toJSON: () => {
    var lead = this.toObject();
    delete lead.UserId;
  },

  // Lifecycle Callbacks
  beforeCreate: (values, proceed) => {
    values.firstName = values.firstName + 'dev';
    values.leadId = values.id;
    delete values.id;
    proceed();
  }
};

