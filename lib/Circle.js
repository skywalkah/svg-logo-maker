const Shape = require('./Shape');

// The class Circle extends the class Shape
class Circle extends Shape {
    // The constructor takes the color and the radius as parameters
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    getShapeType() {
        return 'Circle';
    }

    render() {
        return `<circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />`;
    }
}

module.exports = Circle;
