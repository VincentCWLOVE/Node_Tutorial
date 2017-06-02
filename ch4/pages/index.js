var fs = require("fs");
module.exports = function(req,res){

	fs.readFile("../www/index.html",function(err,data){
		res.writeHead(200,{"Content-type":"text/html;charset=UTF8"});
		res.end(data);
	});
}