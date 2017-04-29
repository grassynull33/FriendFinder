// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 8080;

// For serving of static CSS
app.use(express.static(__dirname + "/app/css"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// API and HTML routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});