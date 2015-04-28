var Gameplay = function () {
	this.score = 0;
	this.lives = 3;
	this.ship = new Ship(function (el) { this.elements.push(el); }.bind(this));
	this.ship.onDestroy(function () { this.lives -= 1; }.bind(this));
	this.enemy = new Enemy(atom.width / 2, 200);
	this.hud = new Hud(this.ship, this.score);
	this.elements = [this.ship, this.enemy];
};

Gameplay.prototype.draw = function (dt) {
	atom.context.fillStyle = 'black';
	atom.context.fillRect(0,0,atom.width,atom.height);
	
	for (element of this.elements) {
		element.draw();
	}
	this.hud.draw(this.lives, this.score);
};

Gameplay.prototype.update = function (dt) {
	
	for (element of this.elements) {
		this.detectCollisions(element);
		element.update();
	}
	this.hud.update(this.lives, this.score);
};

Gameplay.prototype.detectCollisions = function (element) {
	var hasCollision = function (el) {
		return element.area().topLeftX < el.area().topLeftX + el.area().width &&
			   element.area().topLeftX + element.area().width > el.area().topLeftX &&
			   element.area().topLeftY < el.area().topLeftY + el.area().height &&
		       element.area().topLeftY + element.area().height > el.area().topLeftY;
	}
	
	var elements_with_collisions = this.elements.filter(hasCollision).map(function(el) {
		
		el.collidesWith(element);
	});
}