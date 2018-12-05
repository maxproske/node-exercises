/* Load "./node_modules/underscore/underscore" */
var _ = require('underscore');

/* Run exported function */
var m2 = require('./module2');
m2.a();

/* Comes built-in to node */
var http = require('http');
/* This function will fire everytime a request is made */
var server = http.createServer(function(request, response){
    console.log('got a request!');
    response.write("hi");
    response.end();
});
/* Default node.js port is 3000 */
server.listen(3000);