var Cat = require('./Cat.js');
var Mouse  = require('./Mouse.js');
var Dog = require('./Dog.js');

var cat = new Cat('Tom');
var mouse = new Mouse('Jerry');
var dog = new Dog('Fox');

cat.eat(mouse);
mouse.dead();
dog.eat(cat);

console.log(cat);
console.log(mouse);
console.log(dog);