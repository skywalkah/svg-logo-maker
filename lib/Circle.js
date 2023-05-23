const Shape = require('./Shape');

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    getShapeType() {
        return 'Circle';
    }

    getSVGString() {
        return `<circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />`;
    }
}

module.exports = Circle;
