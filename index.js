// Description: This file is the entry point for the application.
// It uses the inquirer package to prompt the user for input, and then
// uses the fs package to write the SVG file to the examples folder.
const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/Circle');
const Triangle = require('./lib/Triangle');
const Square = require('./lib/Square');

// This function takes the user's input and generates the SVG file
function generateLogo({ text, textColor, shape, shapeColor }) {
  // Convert the user's text input to uppercase
  const uppercaseText = text.toUpperCase();
  // Declare variables for the shape element and the text vertical position
  let shapeElement;
  let textVposition;
  
  // Use the user's input to create the appropriate shape
  // and set the text vertical position
  if (shape === 'circle') {
    // Create a new Circle object
    const circle = new Circle(shapeColor, 50);
    textVposition = "52%";
    // Call the render() method on the circle object
    shapeElement = circle.render();
  } else if (shape === 'triangle') {
    // Create a new Triangle object
    const triangle = new Triangle(shapeColor, '150,50 250,150 50,150');
    textVposition = "62%";
    // Call the render() method on the triangle object
    shapeElement = triangle.render();
  } else if (shape === 'square') {
    // Create a new Square object
    const square = new Square(shapeColor, 100, 100);
    textVposition = "52%";
    // Call the render() method on the square object
    shapeElement = square.render();
  }
  
  // Create the SVG string
  const svgString = `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      ${shapeElement}
      <text x="50%" y="${textVposition}" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="36">${uppercaseText}</text>
    </svg>
  `;

  // Write the SVG string to a file
  fs.writeFile(`./examples/${shape}-logo.svg`, svgString, (err) => {
    if (err) throw err;
    console.log(`Generated ${shape}-logo.svg! Find it in the examples folder.`);
  });
}

// Prompt the user for input
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
  // Call the generateLogo() function with the user's input
  .then((answers) => {
    generateLogo(answers);
  })
  // Catch any errors
  .catch((error) => {
    console.error(error);
  });