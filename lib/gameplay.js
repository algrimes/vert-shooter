var Gameplay = function () {
	this.score = 0;
	this.elements = [];
	this.ship = new Ship(function (el) { this.elements.push(el); }, this);
	this.hud = new Hud(this.ship, this.score);
	this.elements = this.elements.concat([this.ship, this.hud]);
};

Gameplay.prototype.draw = function (dt) {
	atom.context.fillStyle = 'black';
	atom.context.fillRect(0,0,atom.width,atom.height);
	
	// for(var i = 1; i < this.stars.length; i++) {
	// 	atom.context.fillStyle = 'white';
	// 	atom.context.fillRect(this.stars[i][0]++, this.stars[i][1], 2, 2);
	// }
	// var remaining_stars = this.stars.filter(function (star) {
	// 	return star[0] < atom.width;
	// });
	//
	// this.stars = remaining_stars;
	// for (var i = 1; i < (this.starfield_depth - this.stars.length); i++) {
	// 	this.stars.push([1, Math.floor(Math.random() * atom.height) + 1])
	// }
	
	for (element of this.elements) {
		element.draw();
	}
};

Gameplay.prototype.update = function (dt) {
	this.ship.update(dt);
	this.hud.update(this.ship, this.score);
};