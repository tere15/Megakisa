var express = require("express"); 
var path = require("path");
var bodyParser = require("body-parser");
var http = require('http');

var server = express();   

server.set('port', process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 3000);
server.set('ip', process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1");


server.use('/',express.static(path.join(__dirname, '../')));
server.use('/app',express.static(path.join(__dirname, '../app')));
server.use('/app/components',express.static(path.join(__dirname, '../app/components')));
server.use('/assets/css',express.static(path.join(__dirname, '../assets/css')));
server.use('/assets/bower_components',express.static(path.join(__dirname, '../assets/bower_components')));
server.use('/assets',express.static(path.join(__dirname, '../assets')));


http.createServer(server).listen(server.get('port') ,server.get('ip'), function() 
{
    console.log("Express server started");
});

