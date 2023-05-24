class Shape {
    // The constructor takes the color as a parameter
    constructor(color) {
        this.color = color;
    }
  
    getShapeType() {
        return 'Shape';
    }

    render() {
        throw new Error('Method not implemented.');
    }

}

module.exports = Shape;
  