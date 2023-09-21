const LogoSVG = require('./svg.js');

const userShape = 'circle'; 
const userText = 'ABC'; 
const userColor = 'blue'; 

const logo = new LogoSVG(userShape, userText, userColor);
const svgCode = logo.generateSVG();

console.log(svgCode); 

describe('LogoSVG class', ()=> {
   test('generateTriangleSVG', () => {
const logo = new LogoSVG('triangle', 'SVG', 'red');
expect(logo.generateSVG()).toBe('<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><polygon points="50,10 10,90 90,90" fill="red" /><text x="35" y="60" fill="white">SVG</text></svg>'); 
   });
});
