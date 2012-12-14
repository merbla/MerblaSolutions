// var express = require('express'),

//   fs = require('fs');
// var app = express.createServer(express.logger());

// app.get('/', function(request, response) {
  

//   fs.readFile(__dirname + '/index.html', 'utf8', function(err, text){
//         response.send(text);
//     });


// });

// var port = process.env.PORT || 5000;
// app.listen(port, function() {
//   console.log("Listening on " + port);
// });

//  

var http = require('http');
var fs = require('fs');
 
http.createServer(function (request, response) {
 
    console.log('request starting...');
     
    fs.readFile('index.htm', function(error, content) {
        if (error) {
        	console.log(error)
            response.writeHead(500);
            response.end();
        }
        else {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(content, 'utf-8');
        }
    });
     
}).listen(8125);
 
console.log('Server running at http://127.0.0.1:8125/');