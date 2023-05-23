class Shape {
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
  