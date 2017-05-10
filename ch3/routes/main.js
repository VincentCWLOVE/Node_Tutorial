var index = require('../pages/index');
var message = require('../pages/message');
var found = require('../pages/found');
var detail = require('../pages/detail');
var mine = require('../pages/mine');
var error = require('../pages/error');


module.exports = function(routeName,req,res){
	switch (routeName){
		case "":
			index(req,res);
			break;
		case "index":
			index(req,res);
			break;
		case "message":
			message(req,res);
			break;
		case "found":
			found(req,res);
			break;
		case "detail":
			detail(req,res);
			break;
		case "mine":
			mine(req,res);
			break;
		default:
			error(req,res);
			break;
	}
}