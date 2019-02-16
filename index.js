var Cat = require('./Cat.js');
var Mouse  = require('./Mouse.js');

var cat = new Cat('Tom');
var mouse = new Mouse('Jerry');
cat.eat(mouse);
mouse.dead();
console.log(cat);
console.log(mouse);