const fs = require('fs');

class LogoSVG {
  constructor(shape, text, color) {
    this.shape = shape;
    this.text = text.substring(0, 3); // Ensure text doesn't exceed 3 characters
    this.color = color;
  }

  generateSVG() {
    switch (this.shape) {
      case 'triangle':
        return this.generateTriangleSVG();
      case 'circle':
        return this.generateCircleSVG();
      case 'square':
        return this.generateSquareSVG();
      default:
        throw new Error('Invalid shape');
    }
  }

  generateTriangleSVG() {
    return `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><polygon points="50,10 10,90 90,90" fill="${this.color}" /><text x="35" y="60" fill="white">${this.text}</text></svg>`;
  }

  generateCircleSVG() {
    return `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="${this.color}" /><text x="40" y="60" fill="white">${this.text}</text></svg>`;
  }

  generateSquareSVG() {
    return `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="80" height="80" fill="${this.color}" /><text x="40" y="60" fill="white">${this.text}</text></svg>`;
  }

  saveToFile(filename) {
    const svgCode = this.generateSVG();
    fs.writeFileSync(filename, svgCode);
  }
}

module.exports = LogoSVG;
