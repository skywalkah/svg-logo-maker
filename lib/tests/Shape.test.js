const Shape = require('../Shape');

describe('Shape', () => {
    test('should return correct shape type', () => {
        const shape = new Shape('red');
    expect(shape.getShapeType()).toBe('Shape');
    });

    test('should throw error for render method', () => {
        const shape = new Shape('red');
        expect(() => shape.render()).toThrow('Method not implemented.');
    });
});
