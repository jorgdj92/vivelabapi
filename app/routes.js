var Persona = require('./model/person');
var Controller = require('./controller');

module.exports = function(app) {

	app.get('/api/getAllPeople', Controller.getAllPeople);
	app.get('/api/getPerson/:personId', Controller.getPerson);
	app.post('/api/createPerson', Controller.createPerson);
	app.put('/api/updatePerson/:personId', Controller.updatePerson);
	app.delete('/api/removePerson/:personId', Controller.removePerson);
};
