var Ship = function (onElementAddedFn, onElementAddedContext) {
	this.lives = 50;
	this.position = { x: atom.width / 2, y: atom.height - 5 };
	this.size = { width: 50, height: 50 };
	this.actions = this._bind_actions();
	this.shots = [];
	this.onElementAdded = onElementAddedFn;
	this.onElementAddedContext = onElementAddedContext;

};

Ship.prototype.update = function () {
	Object.keys(atom.input._down).filter(function (key) { 
		return atom.input.down(key) && this.actions.hasOwnProperty(key);
	}, this).map(function (key) { 
		this.actions[key].apply(this);}, this);
};

Ship.prototype._bind_actions = function () {
	atom.input.bind(atom.key.LEFT_ARROW,  'L');
	atom.input.bind(atom.key.RIGHT_ARROW, 'R');
	atom.input.bind(atom.key.UP_ARROW,    'U');
	atom.input.bind(atom.key.DOWN_ARROW,  'D');
	atom.input.bind(atom.key.SPACE,       'SP');
	
	return {
		L: function () { this.position.x -= 1; },
		R: function () { this.position.x += 1; },
		U: function () { this.position.y -= 1; },
		D: function () { this.position.y += 1; },
		SP:function () { this.fire(); }
	};
};

Ship.prototype.draw = function () {
	atom.context.fillStyle = 'red';
	var area = this.area();
	atom.context.fillRect(area.topLeftX, area.topLeftY, area.width, area.height);
};

Ship.prototype.onCollision = function () {
	--this.lives;
}

Ship.prototype.onFire = function (fn) {
	this.onFireFn = fn;
}

Ship.prototype.fire = function () {
	if (this.shots.length < 5) {
		var shot = new Shot(this.position.x, this.position.y, function () { this.shots.pop(); });
		this.onElementAdded.apply(this.onElementAddedContext, [shot]);
	}	
}

Ship.prototype.area = function () {
	return {
		topLeftX: this.position.x - this.size.width / 2,
		topLeftY: this.position.y - this.size.height / 2,
		width: 25,
		height: 25
	}
}

Ship.prototype.lives = function () {
	return this.lives;
}