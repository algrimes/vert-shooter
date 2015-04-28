var Shot = function (x, y) {
	this.x = x;
	this.y = y;
};

Shot.prototype.update = function () {
	this.y -= 3;
}

Shot.prototype.draw = function () {
	atom.context.fillStyle = 'white';
	var area = this.area();
	atom.context.fillRect(area.topLeftX, area.topLeftY, area.width, area.height);
}

Shot.prototype.area = function () {
	var width = 2;
	var height = 3;
	return {
		topLeftX: this.x - width / 2,
		topLeftY: this.y - height / 2,
		width: 2,
		height: 3
	};
}

Shot.prototype.collidesWith = function () {
	
}