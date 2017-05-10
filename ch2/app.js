var http = require('http');

var url = require('url');

var routes = require('./routes/main');


var server = http.createServer(function(req,res){
	console.log("请求的url：%s",req.url);
	var obj = url.parse(req.url);
	for(var key in obj){
		console.log(key+":"+obj[key]);
	}
	
	var pathname = url.parse(req.url).pathname;
	var routename = pathname.slice(1);

	routes(routename,req,res);
})
server.listen(3000);