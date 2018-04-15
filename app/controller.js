var Person = require('./model/person');

exports.getAllPeople = function (req, res){
	Person.find(
		function(err, person) {
			if (err)
				res.send(err)
			res.json(person); 		
		}
	);
}

exports.getPerson = function (req, res){
	Person.find({personId : req.params.personId},
		function(err, person) {
			if (err)
				res.send(err)
			res.json(person); 		
		}
	);
}

exports.createPerson = function(req, res) {

		Person.create(
			{personId: req.query.personId, firstName: req.query.firstName, lastName: req.query.lastName, email: req.query.email}, 
			function(err, person) {
				if (err)
					res.send(err);
				Person.find(function(err, person) {
				 	if (err)
				 		res.send(err)
				 	res.json(person);
				});
			});

	}

exports.updatePerson = function(req, res){
	Person.update( {personId : req.params.personId},
					{$set:{firstName : req.query.firstName,lastName: req.query.lastName, email: req.query.email}}, 
					function(err, person) {
						if (err)
							res.send(err);
				Person.find(function(err, person) {
				 	if (err)
				 		res.send(err)
				 	res.json(person);
				});
			});
	}

exports.removePerson = function(req, res) {
	Person.remove({personId : req.params.personId}, function(err, person) {
		if (err)
			res.send(err);
			Person.find(function(err, person) {
				if (err)
					res.send(err)
				res.json(person);
			});
		});
}
