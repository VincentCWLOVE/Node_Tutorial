var fs = require("fs");

module.exports = function(req,res){
	res.writeHead(200,{
		'Content-Type':'text/html'
	});
	res.end('<h1>Hello,Detail</h1>')
}