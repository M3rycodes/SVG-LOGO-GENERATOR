
const fs = require('fs');
const inquirer = require('inquirer');
const SVG = require('svg.js');

import('inquirer').then((inquirer) => {
  // Function to limit text input to three characters
  function validateText(input) {
    return input.length <= 3;
  }

  // Function to validate color input
  function validateColor(input) {
    const hexRegex = /^#([0-9a-fA-F]{3}){1,2}$/;
    const colorNames = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'black', 'white'];
    return hexRegex.test(input) || colorNames.includes(input.toLowerCase());
  }

  // Function to generate the SVG logo based on user input
  async function generateLogo() {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo text:',
        validate: validateText,
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color keyword or hexadecimal number for text color:',
        validate: validateColor,
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Select a shape:',
        choices: ['Circle', 'Triangle', 'Square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color keyword or hexadecimal number for shape color:',
        validate: validateColor,
      },
    ]);

    const width = 300;
    const height = 200;

    const canvas = SVG('logo.svg').size(width, height);

    let shape;
    switch (answers.shape.toLowerCase()) {
      case 'circle':
        shape = canvas.circle(width / 2).move(0, 0);
        break;
      case 'triangle':
        shape = canvas.polygon('0,0 ' + width + ',0 ' + width / 2 + ',' + height).move(0, 0);
        break;
      case 'square':
        shape = canvas.rect(width, height).move(0, 0);
        break;
      default:
        console.error('Invalid shape selection.');
        return;
    }

    shape.fill(answers.shapeColor);

    canvas.text(answers.text).move(20, height / 2).fill(answers.textColor);

    console.log('Generated logo.svg');
  }

  // Call the generateLogo function to start generating the SVG
  generateLogo();

}).catch((error) => {
  console.error('Error importing inquirer:', error);
});
