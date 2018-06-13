(function (){
	require('dotenv').config();
	
	const PORT = process.env.PORT;	
	var restify = require("restify");
	var server = restify.createServer();
	server.use(restify.queryParser());
	server.use(restify.bodyParser());
	
	require("./routes/beep")(server);

	server.listen(PORT, function() {
		console.log('%s listening at %s', server.name, server.url);
	});
})();
