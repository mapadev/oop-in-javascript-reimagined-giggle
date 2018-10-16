function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape(color) {}

Shape.prototype.duplicate = function() {
    console.log("duplicate");
};

function Circle(radius, color) {
    Shape.call(this, color);

    this.radius = radius;
}

extend(Circle, Shape);

Circle.prototype.duplicate = function() {
    console.log("duplicate circle");

    // We can also call method on parent
    Shape.prototype.duplicate.call(this);
    // ...or without 'call' if no using this in method
    Shape.prototype.duplicate();
};

const c = new Circle();
