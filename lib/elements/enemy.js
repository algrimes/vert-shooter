var Enemy = function (x, y) {
	this.position = { x: x, y: y }
	this.score = 40;
	this.onDestroyCallbacks = [];
}

Enemy.prototype.update = function () {
	this.position.y +=2
}

Enemy.prototype.draw = function () {
	var area = this.area();
	atom.context.fillStyle = 'green';
	atom.context.fillRect(area.topLeftX, area.topLeftY, area.width, area.height);
}

Enemy.prototype.score = function () {
	return this.score;
}

Enemy.prototype.area = function () {
	var width = height = 20;
	return {
		topLeftX: this.position.x - width / 2,
		topLeftY: this.position.y - height / 2,
		width: width,
		height: height
	}
}

Enemy.prototype.collidesWith = function (element) {
	if (element instanceof Shot) {
				console.log("ENEMY HIT BY SHOT");
		for (c of this.onDestroyCallbacks) {
			c(this);
		}
	}
}

Enemy.prototype.onDestroy = function (fn) {
	this.onDestroyCallbacks.push(fn);
}
