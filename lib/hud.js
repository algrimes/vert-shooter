var Hud = function (lives, score) {
	this.lives = lives;
	this.score = score;
}

Hud.prototype.update = function (lives, score) {
	this.lives = lives;
	this.score = score;
}

Hud.prototype.draw = function () {
	var scoreLabel = "SCORE";
	var livesLabel = "LIVES";
	atom.context.font = '10px "Helvetica"';
	atom.context.fillStyle = 'red';
	atom.context.fillText(scoreLabel, 20, 20);
	atom.context.fillText(this.score, 20, 50);
	atom.context.fillText(livesLabel, 80, 20);
	atom.context.fillText(this.lives, 80, 50);
}