const Square = require('../Square');

describe('Square', () => {
    test('should return correct shape type', () => {
        const square = new Square('orange', 200, 100);
        expect(square.getShapeType()).toBe('Square');
    });

    test('should return correct SVG string', () => {
        const square = new Square('blue', 200, 100);
        const expectedSVGString = '<rect x="100" y="50" width="200" height="100" fill="blue" />';
        expect(square.render()).toBe(expectedSVGString);
    });
});
