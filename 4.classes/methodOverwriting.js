class Shape {
    move() {
        console.log("shape moving...");
    }
}

class Circle extends Shape {
    move() {
        // call method on parent using 'super':
        super.move();

        console.log("circle moving...");
    }
}

const c = new Circle();

console.log("c", c);
