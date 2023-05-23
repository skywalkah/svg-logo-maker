const Circle = require('../Circle');

describe('Circle', () => {
    test('should return correct shape type', () => {
        const circle = new Circle('blue', 50);
        expect(circle.getShapeType()).toBe('Circle');
    });

    test('should return correct SVG string', () => {
        const circle = new Circle('blue', 50);
        const expectedSVGString = '<circle cx="150" cy="100" r="50" fill="blue" />';
        expect(circle.render()).toBe(expectedSVGString);
    });
});
