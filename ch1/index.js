var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req, res){
	res.writeHead(200,{
		'Content-Type':'text/html'
	});
	// res.end('<h1>Hello,welcome to node</h1>')

	fs.readFile('www/index.html',function(err,data){
		if (!err) {
			res.end(data.toString());
		}else{
			res.end("<h1>404 Not found</h1>")
		}
	});
});

server.listen(3000);