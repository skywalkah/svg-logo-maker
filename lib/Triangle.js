const Shape = require('./Shape');
// The class Triangle extends the class Shape
class Triangle extends Shape {
    // The constructor takes the color and the points as parameters
    constructor(color, points) {
        super(color);
        this.points = points;
    }

    getShapeType() {
        return 'Triangle';
    }

    render() {
        return `<polygon points="${this.points}" fill="${this.color}" />`;
    }
}

module.exports = Triangle;
