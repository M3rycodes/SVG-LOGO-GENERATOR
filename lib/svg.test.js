const LogoSVG = require('./LogoSVG')

const userShape = 'circle'; // Replace with user's choice
const userText = 'ABC'; // Replace with user's text input
const userColor = 'blue'; // Replace with user's color choice

const logo = new LogoSVG(userShape, userText, userColor);
const svgCode = logo.generateSVG();

console.log(svgCode); // Output the generated SVG code
