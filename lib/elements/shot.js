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
	return {
		topLeftX: this.x,
		topLeftY: this.y,
		width: 2,
		height: 3
	};
}