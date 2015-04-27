var Gameplay = function () {
	this.score = 0;
	this.elements = [];
	this.ship = new Ship(function (el) { this.elements.push(el); }.bind(this));
	this.hud = new Hud(this.ship, this.score);
	this.elements = this.elements.concat([this.ship]);
};

Gameplay.prototype.draw = function (dt) {
	atom.context.fillStyle = 'black';
	atom.context.fillRect(0,0,atom.width,atom.height);
	
	for (element of this.elements) {
		element.draw();
	}
};

Gameplay.prototype.update = function (dt) {
	for (element of this.elements) {
		element.update();
	}
	this.hud.update(this.ship, this.score);
};