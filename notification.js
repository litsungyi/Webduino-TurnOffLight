const DEVICE = process.env.WEBDUINO_DEVICE_ID;
const PIN = process.env.WEBDUINO_BUZZER_PIN;

var webduino = require("webduino-js");

module.exports = function(server) {
	server.post('/notification/start', function(req, res, next) {
		console.log(JSON.stringify(req.params));
		var notes = ['E5', 'E5', 'REST', 'E5', 'REST', 'C5', 'E5', 'REST', 'G5'];
		var tempos = [8, 8, 8, 8, 8, 8, 8, 8, 8];

		var board = new webduino.WebArduino(DEVICE);
		board.on(webduino.BoardEvent.READY, function() {
			var buzzer = new webduino.module.Buzzer(board, board.getDigitalPin(PIN));
			buzzer.play(notes, tempos);
                        console.log("Notification/Start SUCCESS");
		});
		board.on(webduino.BoardEvent.ERROR, function() {
                        console.log("Notification/Start ERROR");
		});

		res.send(200);
                return next();
	});
	server.post('/notification/timeout', function(req, res, next) {
		console.log(JSON.stringify(req.params));

		var notes = ['E5', 'E5', 'REST', 'E5', 'REST', 'C5', 'E5', 'REST', 'G5'];
		var tempos = [8, 8, 8, 8, 8, 8, 8, 8, 8];

		var board = new webduino.WebArduino(DEVICE);
		board.on(webduino.BoardEvent.READY, function() {
			var buzzer = new webduino.module.Buzzer(board, board.getDigitalPin(PIN));
			buzzer.play(notes, tempos);
			console.log("Notification/Timeout SUCCESS");
		});
		board.on(webduino.BoardEvent.ERROR, function() {
			console.log("Notification/Timeout ERROR");
		});

		res.send(200);
		return next();
	});
};
