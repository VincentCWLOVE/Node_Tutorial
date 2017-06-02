var fs = require("fs");
var url = require("url");
var path = require("path");

module.exports = function(req,res,static_dir){
	//路径
	var pathname = url.parse(req.url).pathname;
	//拓展名
	var extname = path.extname(pathname);
	var mime = (function(extname){
		switch(extname){
		case ".html" :
			return "text/html";
			break;
		case ".jpg" : 
			return "image/jpg";
			break;
		case ".css" :
			return "text/css";
			break;
		}
	})(extname);
	fs.readFile("./"+static_dir+"/" + pathname,function(err,data){
		if(err){
			console.log("找不到");
			//如果此文件不存在，就应该用404返回
			fs.readFile("./404.html",function(err,data){
				res.writeHead(404,{"Content-type":"text/html;charset=UTF8"});
				res.end(data);
			});
		};
		res.writeHead(200,{"Content-type":mime});
		res.end(data);
	});

}