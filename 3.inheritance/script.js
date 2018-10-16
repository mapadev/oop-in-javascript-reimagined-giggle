function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function() {
    console.log("duplicate");
};

function Circle(radius, color) {
    // Call parent constructor with proper this
    Shape.call(this, color);

    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function() {
    console.log("draw");
};

function Square(size) {
    this.size = size;
}

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

const s = new Shape("red");
const c = new Circle(1, "blue");
// const c = new Circle.prototype.constructor(1);

const sq = new Square(10);

// Instead of repeating prototype overwriting
// we can use "Intermediate function inheritance" (extend fn)
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Triangle() {}

extend(Triangle, Shape);

const t = new Triangle();
t.duplicate();
