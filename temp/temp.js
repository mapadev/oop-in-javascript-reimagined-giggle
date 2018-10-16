function Mammal() {}
function Dog() {}

Mammal.prototype.walk = function() {
    console.log("walking..walking....");
};

Dog.prototype = Object.create(Mammal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
    console.log("wof wof!");
};

let dogInstance = new Dog();
dogInstance.walk();
dogInstance.bark();
