var express = require("express"); 
var path = require("path");
var bodyParser = require("body-parser");
var http = require('http');

var server = express();    

server.set('port', process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 3000);
server.set('ip', process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1");


//=====================MIDDLEWARES=====================//

server.use('/',express.static(path.join(__dirname, '../')));
server.use('/app',express.static(path.join(__dirname, '../app')));
server.use('/app/components',express.static(path.join(__dirname, '../app/components')));
server.use('/assets/css',express.static(path.join(__dirname, '../assets/css')));
server.use('/assets/bower_components',express.static(path.join(__dirname, '../assets/bower_components')));
server.use('/assets',express.static(path.join(__dirname, '../assets')));

//app.get('/logout',function(req,res){
    
//   req.session.destroy();
//    res.redirect('/');
//});

//app.use(function(req,res,next){                     
    
//    console.log(req.method);
//    console.log(req.path);
//   console.log(__dirname);
//    console.log(req.body);
   // console.log(database.productGroup.gName);
    //database.myFunction();
    //Send reques forward in stack
//    next(); // seuraavaan middlewareen
//});

http.createServer(server).listen(server.get('port') ,server.get('ip'), function() 
{
    console.log("Express server started");
});


//=====================ROUTERS=====================//

//app.get("/groups", function(req,res){
//    queries.getAllGroups(req,res);
//    res.send("Hello persons there!");
//});


//server.listen(3000);
