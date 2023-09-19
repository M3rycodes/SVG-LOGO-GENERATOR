const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle class', () => {
  test('render method should return SVG string with the given color', () => {
    const triangle = new Triangle(100, 50, 'blue');
    expect(triangle.render()).toMatch(`<svg width="100" height="50"><polygon points="0,0 100,0 50,50" fill="blue" /></svg>`);
  });
});

describe('Circle class', () => {
  test('render method should return SVG string with the given color', () => {
    const circle = new Circle(50, 'red');
    expect(circle.render()).toMatch('<svg width="100" height="100"><circle cx="50" cy="50" r="50" fill="red" /></svg>');
  });
});

describe('Square class', () => {
  test('render method should return SVG string with the given color', () => {
    const square = new Square(80, 'green');
    expect(square.render()).toMatch('<svg width="80" height="80"><rect width="80" height="80" fill="green" /></svg>');
  });
});
