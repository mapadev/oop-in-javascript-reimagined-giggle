// Constructor function
function Circle(radius) {
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0 };
    let computeOptimumLocation = function() {
        console.log("optimum location");
    };

    //getter function has closure over defaultLocation variable
    this.getDeafaultLocation = function() {
        return defaultLocation;
    };

    Object.defineProperty(this, "defaultLocation", {
        get: function() {
            return defaultLocation;
        },

        set: function(value) {
            if (!value.x || !value.y) {
                throw new Error("Invalid location.");
            }

            defaultLocation = value;
        }
    });

    this.draw = function() {
        //access "private" properties and method without "this"
        computeOptimumLocation();
        console.log("default Location: ", defaultLocation);

        console.log("draw circle");
    };
}

const newCircle = new Circle(1);

//// Throws error because of setter validation
// newCircle.defaultLocation = 1;

//// Works properly:
newCircle.defaultLocation = { x: 1, y: 2 };

console.log("-------------------");
console.log("values from draw method with closure over private props");
newCircle.draw();
console.log("-------------------");

const defLocation = newCircle.getDeafaultLocation();
console.log("location from getDafaultLocation", defLocation);

console.log("location from getter", newCircle.defaultLocation);
