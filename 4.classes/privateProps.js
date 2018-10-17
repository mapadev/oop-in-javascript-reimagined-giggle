const _radius = Symbol();
const _draw = Symbol();

class Circle {
    constructor(radius) {
        // Private property
        this[_radius] = radius;
    }

    // Private method
    [_draw]() {
        console.log("drawing...");
    }
}

const c = new Circle(1);
console.log("c", c);

// Workaround that allows to actually get private prop
const key = Object.getOwnPropertySymbols(c)[0];
console.log(c[key]); // returns radius
