var mongoose = require('mongoose')
require('mongoose-long')(mongoose);
var SchemaTypes = mongoose.Schema.Types;

module.exports = mongoose.model('Person', {
	personId: SchemaTypes.Long,
	firstName: String,
	lastName: String,
	email: String
});
