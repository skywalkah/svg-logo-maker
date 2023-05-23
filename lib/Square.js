const Shape = require('./Shape');

class Square extends Shape {
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
