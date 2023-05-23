const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/Circle');
const Triangle = require('./lib/Triangle');
const Square = require('./lib/Square');


function generateLogo({ text, textColor, shape, shapeColor }) {
    const uppercaseText = text.toUpperCase();
    let shapeElement;
    let textVposition;
  
    if (shape === 'circle') {
      const circle = new Circle(shapeColor, 50);
      textVposition = "52%";
      shapeElement = circle.render();
    } else if (shape === 'triangle') {
      const triangle = new Triangle(shapeColor, '150,50 250,150 50,150');
      textVposition = "62%";
      shapeElement = triangle.render();
    } else if (shape === 'square') {
      const square = new Square(shapeColor, 100, 100);
      textVposition = "52%";
      shapeElement = square.render();
    }
  
    const svgString = `
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        ${shapeElement}
        <text x="50%" y="${textVposition}" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="36">${uppercaseText}</text>
      </svg>
    `;
  
    fs.writeFile(`./examples/${shape}-logo.svg`, svgString, (err) => {
        if (err) throw err;
        console.log(`Generated ${shape}-logo.svg! Find it in the examples folder.`);
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