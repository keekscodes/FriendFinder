// Initialize npm

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

var PORT = process.env.PORT || 8080;



// API and HTML routes
require("./app/routing/apiRoutes.js");
require("./app/routing/htmlRoutes.js");

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});