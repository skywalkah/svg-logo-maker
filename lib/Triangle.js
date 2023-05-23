const Shape = require('./Shape');

class Triangle extends Shape {
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
