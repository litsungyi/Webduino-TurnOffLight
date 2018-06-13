const DEVICE = process.env.WEBDUINO_DEVICE_ID;
const PIN = process.env.WEBDUINO_BUZZER_PIN;

var webduino = require("webduino-js");

module.exports = function(server) {
	server.get('/beep', function(req, res, next) {
		var notes = ['E5', 'E5', 'REST', 'E5', 'REST', 'C5', 'E5', 'REST', 'G5'];
		var tempos = [8, 8, 8, 8, 8, 8, 8, 8, 8];

		var board = new webduino.WebArduino(DEVICE);
		board.on(webduino.BoardEvent.READY, function() {
			var buzzer = new webduino.module.Buzzer(board, board.getDigitalPin(PIN));
			buzzer.play(notes, tempos);
		});
		board.on(webduino.BoardEvent.ERROR, function() {
		});

		res.send(200);
		return next();
	});

	server.get('/beep2', function(req, res, next) {
		var notes = ['A5', 'E5', 'REST', 'E5', 'REST', 'E5', 'REST', 'B5'];
		var tempos = [16, 4, 8, 16, 32, 32, 16, 4, 8];

		var board = new webduino.WebArduino(DEVICE);
		board.on(webduino.BoardEvent.READY, function() {
			var buzzer = new webduino.module.Buzzer(board, board.getDigitalPin(PIN));
			buzzer.play(notes, tempos);
		});
		board.on(webduino.BoardEvent.ERROR, function() {
		});

		res.send(200);
		return next();
	});
};
