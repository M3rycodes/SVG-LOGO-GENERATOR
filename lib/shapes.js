class Triangle {
    constructor(base, height, color) {
      this.base = base;
      this.height = height;
      this.color = color;
    }
  
    render() {
      return `<svg width="${this.base}" height="${this.height}"><polygon points="0,0 ${this.base},0 ${this.base / 2},${this.height}" fill="${this.color}" /></svg>`;
    }
  }
  
  class Circle {
    constructor(radius, color) {
      this.radius = radius;
      this.color = color;
    }
  
    render() {
      return `<svg width="${2 * this.radius}" height="${2 * this.radius}"><circle cx="${this.radius}" cy="${this.radius}" r="${this.radius}" fill="${this.color}" /></svg>`;
    }
  }
  
  class Square {
    constructor(side, color) {
      this.side = side;
      this.color = color;
    }
  
    render() {
      return `<svg width="${this.side}" height="${this.side}"><rect width="${this.side}" height="${this.side}" fill="${this.color}" /></svg>`;
    }
  }
  
  module.exports = { Triangle, Circle, Square };
  