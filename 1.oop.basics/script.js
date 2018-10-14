// const circle = {
//     radius: 1,
//     location: {
//         x: 0,
//         y: 0
//     },
//     draw: function() {
//         console.log("draw");
//     }
// };

// Factory function
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log("draw circle");
        }
    };
}

// Constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log("draw another circle");
    };
}

const circle = createCircle(1);
circle.draw();

const newCircle = new Circle(1);
newCircle.draw();
