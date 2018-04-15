var express = require('express'),
    app = express();
var mongoose = require('mongoose');
var port = process.env.PORT || 8080;
var logger = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

mongoose.connect('mongodb://localhost:27017/mongoTest');


//app.use(express.static(__dirname + '/angular'));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride());

require('./app/routes.js')(app);

app.listen(port, function (){
	console.log("APP por el puerto " + port);	
});


