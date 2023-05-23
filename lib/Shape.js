class Shape {
    constructor(color) {
        this.color = color;
    }
  
    getShapeType() {
        return 'Shape';
    }
  
    getSVGString() {
        // Each child class should implement this method
        throw new Error('Method not implemented.');
    }
}

module.exports = Shape;
  