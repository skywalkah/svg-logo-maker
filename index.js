const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/Circle');
const Triangle = require('./lib/Triangle');
const Square = require('./lib/Square');


function generateLogo({ text, textColor, shape, shapeColor }) {
    let shapeElement;
  
    if (shape === 'circle') {
      const circle = new Circle(shapeColor, 50);
      shapeElement = circle.getSVGString();
    } else if (shape === 'triangle') {
      const triangle = new Triangle(shapeColor, '150,50 250,150 50,150');
      shapeElement = triangle.getSVGString();
    } else if (shape === 'square') {
      const square = new Square(shapeColor, 200, 100);
      shapeElement = square.getSVGString();
    }
  
    const svgString = `
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        ${shapeElement}
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="40">${text}</text>
      </svg>
    `;
  
    fs.writeFile('logo.svg', svgString, (err) => {
        if (err) throw err;
        console.log('Generated logo.svg!');
    });
}

inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters:',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the text color:',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the shape color:',
        },
    ])
    .then((answers) => {
        generateLogo(answers);
    })
    .catch((error) => {
        console.error(error);
    });