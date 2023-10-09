# Description

The oklch-parser-modifier npm package is a versatile utility for working with Oklch color codes within text strings. Oklch color codes are a specialized representation of colors, and this package makes it easy to parse and modify them within any string, providing developers with powerful color manipulation capabilities.

## Installation

Install the package in your Node.js project using:

```bash
npm install oklch-parser-modifier
```

## Usage

```javascript
const oklchParserModifier = require('oklch-parser-modifier');

const inputString = 'This is an example oklch(70, 50, 120) color code.';
const modifiedString = oklchParserModifier(inputString);

console.log(modifiedString);
// Output: 'This is an example rgb(255,0,0) color code.'
```

## Key Features

- Parse Oklch Color Codes: Easily extract Oklch color codes from text strings using a simple and efficient regular expression-based approach.

- Modify Colors: Seamlessly modify Oklch color codes with your custom logic, whether you want to adjust brightness, change saturation, or apply any other color transformation.

- Convert to RGB: Automatically convert Oklch color codes to RGB for easy integration with existing color handling libraries and systems.

- Lightweight and Efficient: Designed to be lightweight and efficient, ensuring minimal performance impact on your applications.

- Developer-Friendly: Provides a clear and intuitive API for developers to integrate Oklch color parsing and modification into their projects.

## License

MIT

