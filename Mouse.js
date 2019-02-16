function Mouse() {
	this.live = true;
}

Mouse.prototype.dead = function() {
	this.live =false;
}

module.exports = Mouse;