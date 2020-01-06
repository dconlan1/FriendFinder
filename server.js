var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var port = 3000;

var app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.use("/api", require('./app/routing/apiRoutes'))
app.use("/", require('./app/routing/htmlRoutes'))

app.listen(port);