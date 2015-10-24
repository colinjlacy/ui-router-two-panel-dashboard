/**
 * Created by colinjlacy on 9/13/15.
 */
var http = require('http'),
	fs = require('fs'),
	process = require('process');

http.createServer(function (req, res) {
	if(req.url=='/index.html' || req.url=='/') {
		fs.readFile('./index.html',function(err,data){
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(data);
		});
	} else {
		var file = __dirname + req.url;
		fs.readFile(file, function (err, data) {
			res.end(data);
		});
	}
}).listen(process.env.PORT || 5000);
