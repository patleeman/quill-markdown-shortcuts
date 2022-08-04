const liveServer = require('live-server')

var params = {
	port: 8080,
	host: "0.0.0.0",
	root: "./docs/module/",
	open: true,
	file: "index.html",
	wait: 1000, 
	logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
	middleware: [function(req, res, next) { next(); }]
};

liveServer.start(params);
