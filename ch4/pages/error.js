module.exports = function(req,res){
	res.writeHead(200,{
		'Content-Type':'text/html'
	});
	res.end('<h1>404 Not Found</h1>')
}