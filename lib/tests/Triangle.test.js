const Triangle = require('../Triangle');

describe('Triangle', () => {
    test('should return correct shape type', () => {
        const triangle = new Triangle('green', '150,50 250,150 50,150');
        expect(triangle.getShapeType()).toBe('Triangle');
    });

    test('should return correct SVG string', () => {
        const triangle = new Triangle('blue', '150,50 250,150 50,150');
        const expectedSVGString = '<polygon points="150,50 250,150 50,150" fill="blue" />';
        expect(triangle.render()).toBe(expectedSVGString);
    });
});