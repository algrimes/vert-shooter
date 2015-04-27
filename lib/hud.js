var Hud = function (ship, score) {
	this.ship = ship;
	this.score = score;
}

Hud.prototype.update = function (ship, score) {
	this.ship = ship;
	this.score = score;
}

Hud.prototype.draw = function () {
	var scoreLabel = "SCORE"
	atom.context.font = '10px "Helvetica"';
	atom.context.fillStyle = 'red';
	var textDimensions = atom.context.measureText(scoreLabel);
	atom.context.fillText(scoreLabel, 20, 20);
	atom.context.fillText(this.score, 20, 50);
}