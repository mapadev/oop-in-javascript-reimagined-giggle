// Constructor function
function Circle(radius) {
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0 };
    let computeOptimumLocation = function() {
        console.log("optimum location");
    };

    this.draw = function() {
        //access "private" properties and method without "this"
        computeOptimumLocation();

        console.log("default Location: ", defaultLocation);

        console.log("draw another circle");
    };
}

// const newCircle = {};
// newCircle.radius = 1;
// newCircle.draw = function() {
//     console.log("draw me some");
// }

const newCircle = new Circle(1);
newCircle.draw();
