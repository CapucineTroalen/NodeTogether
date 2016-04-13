var express = require('express');
var app = express();

app.get("/", function(request, response){
	response.send ("Bitch better have my money");
});

module.exports = app;