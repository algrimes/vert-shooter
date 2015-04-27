var Shot = function (x, y, onExitScreenFn) {
	this.x = x;
	this.y = y;
	this.onExitScreen = onExitScreenFn;
};

Shot.prototype.update = function () {
	this.y -= 1;
	if (this.y < 0) {
		this.onExitScreen();
	}
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
		height: 5
	};
}