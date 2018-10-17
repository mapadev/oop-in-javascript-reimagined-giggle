const _radius = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius);

        // ES5 descriptor get
        Object.defineProperty(this, "oldRadius", {
            get: function() {
                return _radius.get(this);
            }
        });
    }

    // ES5 method
    getRadius() {
        return _radius.get(this);
    }

    // ES6 'get' and 'set' syntax - looks like a method but can be accessed like prop
    get radius() {
        return _radius.get(this);
    }

    set radius(value) {
        if (value <= 0) {
            throw new Error("invalid radius");
        }

        _radius.set(this, value);
    }
}

const c = new Circle(1);
console.log("c", c);

console.log("ES5 descriptor get:", c.oldRadius);
console.log("ES5 getRadius method:", c.getRadius());
console.log("ES6 get radius:", c.radius);
