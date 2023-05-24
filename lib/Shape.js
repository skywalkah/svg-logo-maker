class Shape {
    // The constructor takes the color and the radius as parameters
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
  