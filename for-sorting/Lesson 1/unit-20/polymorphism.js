class Shape {
    constructor(points) {
        this.points = points;
    }

    toJSON() {
        return JSON.stringify(this.points);
    }
}

class Triangle extends Shape {
    render() {
        /*...*/
    }
}

class Circle extends Shape {
    constructor(centerPoint, radius) {
        super([centerPoint]);

        this.radius = radius;
    }

    drawCircle() {
        /*...*/
    }
    
    stringify() {
        return JSON.stringify({
            center: this.points[0],
            raduis: this.radius,
        });
    }
}

class Triangle extends Shape {
    draw() {
        /*...*/
    }
}

class Circle extends Shape {
    constructor(centerPoint, radius) {
        super([centerPoint]);

        this.radius = radius;
    }

    draw() {
        /*...*/
    }
    
    toJSON() {
        return JSON.stringify({
            center: this.points[0],
            raduis: this.radius,
        });
    }
}
