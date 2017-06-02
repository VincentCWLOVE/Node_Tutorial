var http = require('http');

var url = require('url');

//静态文件
var src = require('./libs/static.js');
//路由
var routes = require('./routes/main');

var server = http.createServer(function(req,res){

	
	var pathname = url.parse(req.url).pathname;
	var routename = pathname.slice(1);

	routes(routename,req,res);

	src(req,res);

	
})
server.listen(3000);