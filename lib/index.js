var game = new atom.Game();

window.onblur  = function () { game.stop(); };
window.onFocus = function () { game.run(); };

var current_mode = new Gameplay();

game.update = function (dt) {
	current_mode.update(dt);
};

game.draw = function (dt) {
	current_mode.draw(dt);
};

game.run();