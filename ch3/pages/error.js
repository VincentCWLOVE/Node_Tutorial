module.exports = function(req,res){
	if (req.method != "GET") {
		res.writeHead(200,{
			'Content-Type':'application/json'
		});
		var obj = {
			"message" : "非法请求",
		}
		res.end(JSON.stringify(obj))
	}else {
		res.writeHead(200,{
			'Content-Type':'application/json'
		});
		var obj = {
			"name" : "vincent",
			"age" : 18
		}
		res.end(JSON.stringify(obj))
	}

}