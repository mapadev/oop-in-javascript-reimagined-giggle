const _radius = new WeakMap();
const _move = new WeakMap();

// Alternatively single WeakMap
const privateProps = new WeakMap();

class Circle {
    constructor(radius) {
        // private property
        _radius.set(this, radius);

        // Classic function declaration instead of arrowFn would return 'this' as undefined
        _move.set(this, () => {
            console.log("moving...", this);
        });

        // Alternatively single WeakMap props and methods
        privateProps.set(this, {
            radius: radius,
            move: function() {
                console.log("privateProps moving...");
            }
        });
    }

    draw() {
        // Using private property
        console.log("draw radius:", _radius.get(this));

        // Using private method
        _move.get(this)();

        // privateProps form single WeakMap usage:
        console.log("privateProps radius:", privateProps.get(this).radius);

        privateProps.get(this).move();
    }
}

const c = new Circle(1);
console.log("c", c);

c.draw();
