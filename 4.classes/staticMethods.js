// Use static methods for utility functions

class Circle {
    constructor(radius) {
        this.radius = radius;

        this.fly = function() {
            console.log("flying...");
        };
    }

    // Instance method
    draw() {
        console.log("drawing...");
    }

    // Static method
    static parse(str) {
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
}

const c = new Circle(1);

// Static method is available only on Class itself
const c1 = Circle.parse('{ "radius": 1 }');

console.log(c);
console.log("c1", c1);
