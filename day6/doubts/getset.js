class Circle {
    constructor(radius = 1.0, color = 'red') {
        this.radius = radius;
        this.color = color;
    }

    get _radius() {
        return this.radius;
    }

    set _radius(radius) {
        this.radius = radius;
    }
}

// let circle = new Circle();
// let circle = new Circle(4.5);
let circle1 = new Circle(4.5, 'yellow');

// circle1.setRadius(6.45);
circle1._radius = 6.45;


console.log(circle1._radius);