const Shape = require('./Shape');
// The class Square extends the class Shape
class Square extends Shape {
    // The constructor takes the color, the width and the height as parameters
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }

    getShapeType() {
        return 'Square';
    }

    render() {
        return `<rect x="100" y="50" width="${this.width}" height="${this.height}" fill="${this.color}" />`;
    }
}

module.exports = Square;
