var Ship = function (onElementAddedFn) {
	this.position = { x: atom.width / 2, y: atom.height - 20 };
	this.moves = this._bind_joystick();
	this.actions = this._bind_buttons();
	this.onElementAdded = onElementAddedFn;
	this.onDestroyCallbacks = [];
};

Ship.prototype.update = function () {
	
	Object.keys(atom.input._down).filter(function (key) { 
		return atom.input.down(key) && this.moves.hasOwnProperty(key);
	}, this).map(function (key) { 
		this.moves[key].apply(this);}, this);
		
	Object.keys(atom.input._pressed).filter(function (key) { 
		return atom.input.pressed(key) && this.actions.hasOwnProperty(key);
	}, this).map(function (key) { 
		this.actions[key].apply(this);}, this);
};

Ship.prototype._bind_joystick = function () {
	atom.input.bind(atom.key.LEFT_ARROW,  'L');
	atom.input.bind(atom.key.RIGHT_ARROW, 'R');
	atom.input.bind(atom.key.UP_ARROW,    'U');
	atom.input.bind(atom.key.DOWN_ARROW,  'D');
	
	return {
		L: function () { this.position.x -= 2; },
		R: function () { this.position.x += 2; },
		U: function () { this.position.y -= 2; },
		D: function () { this.position.y += 2; }
	};
};

Ship.prototype._bind_buttons = function () {
	atom.input.bind(atom.key.SPACE,  'SP');
	
	return {
		SP:function () { this.fire(); }
	};
};

Ship.prototype.draw = function () {
	var area = this.area();
	atom.context.fillStyle = 'red';
	atom.context.fillRect(area.topLeftX, area.topLeftY, area.width, area.height);
};

Ship.prototype.fire = function () {
	var shot = new Shot(this.position.x, this.position.y - this.area().width / 2);
	this.onElementAdded(shot);
}

Ship.prototype.area = function () {
	var width = height = 25;
	return {
		topLeftX: this.position.x - width / 2,
		topLeftY: this.position.y - height / 2,
		width: width,
		height: height
	}
}

Ship.prototype.collidesWith = function (element) {
	if (element instanceof Enemy) {
		console.log("SHIP HIT BY ENEMY");
		for (c of this.onDestroyCallbacks) {
			c(this);
		}
	}
}

Ship.prototype.onDestroy = function (fn) {
	this.onDestroyCallbacks.push(fn);
}