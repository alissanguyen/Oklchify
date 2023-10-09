# Description

The oklch-parser-modifier npm package is a versatile utility for working with Oklch color codes within text strings. Oklch color codes are a specialized representation of colors, and this package makes it easy to parse and modify them within any string, providing developers with powerful color manipulation capabilities.

## Installation

Install the package in your Node.js project using:

```bash
npm install oklchify
```

## Usage

### Extracting Oklch value
```javascript
const oklchParserModifier = require('oklchify');

const inputString = 'This is an example oklch(70, 50, 120) color code.';
const modifiedString = oklchify.extractOklchValue(inputString);

console.log(modifiedString);
// Output: '(70, 50, 120)'
```

### Modify Oklch value based on single property
```javascript
// Original Oklch values without alpha
const originalOklch1: OklchValue = [60, 32, 250];
const modifiedOklch1 = modifyOklch(...originalOklch1 as [number, number, number], undefined, 'hue', 270);
console.log(modifiedOklch1); // Expected output: [60, 32, 270]

// Original Oklch values with alpha
const originalOklch2: OklchValue = [60, 32, 250, 80];
const modifiedOklch2 = modifyOklch(...originalOklch2, 'alpha', 90);
console.log(modifiedOklch2); // Expected output: [60, 32, 250, 90]
```

### Converting Oklch to RGB
```javascript
// Convert Oklch to RGB without alpha
const rgbValues1 = oklchToRgb(60, 32, 250);
console.log(rgbValues1); // Output: [r1, g1, b1]

// Convert Oklch to RGB with alpha
const rgbaValues = oklchToRgb(60, 32, 250, 128);
console.log(rgbaValues); // Output: [r2, g2, b2, 128]
```

## Key Features

- Parse Oklch Color Codes: Easily extract Oklch color codes from text strings using a simple and efficient regular expression-based approach.

- Modify Colors: Seamlessly modify Oklch color codes with your custom logic, whether you want to adjust brightness, change saturation, or apply any other color transformation.

- Convert to RGB: Automatically convert Oklch color codes to RGB for easy integration with existing color handling libraries and systems.

- Lightweight and Efficient: Designed to be lightweight and efficient, ensuring minimal performance impact on your applications.

- Developer-Friendly: Provides a clear and intuitive API for developers to integrate Oklch color parsing and modification into their projects.

## License

MIT

