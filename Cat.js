function Cat() {
	this.belly = []; 
}

Cat.prototype.eat = function (mouse) {
	this.belly.push(mouse);
}

module.exports = Cat;