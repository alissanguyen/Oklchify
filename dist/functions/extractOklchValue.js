"use strict";
/**
 * Oklch color representation typically consists of three components:
 * L (lightness), C (chroma), and H (hue).
 * If a sentence has an Oklch color code, it will likely be formatted with three values.
 * An example format could be oklch(60, 32, 250), where 60 represents lightness, 32 represents chroma, and 250 represents hue.
 * @param inputString
 * @returns
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractOklchValue = void 0;
function extractOklchValue(inputString) {
    // Regex modified to potentially match a fourth (alpha) value
    const regex = /oklch\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)/;
    const match = inputString.match(regex);
    if (match) {
        const l = parseInt(match[1]);
        const c = parseInt(match[2]);
        const h = parseInt(match[3]);
        // If there's a fourth match (alpha value), parse it and return the 4-tuple
        if (match[4]) {
            const a = parseInt(match[4]);
            return [l, c, h, a];
        }
        // Otherwise, return the 3-tuple
        return [l, c, h];
    }
    return null;
}
exports.extractOklchValue = extractOklchValue;
/**
 * EXAMPLE:
```
const inputString1 = "The color is oklch(60, 32, 250, 80) with transparency.";
console.log(extractOklchValue(inputString1));  // Expected output: [60, 32, 250, 80]

const inputString2 = "The color is oklch(60, 32, 250) without transparency.";
console.log(extractOklchValue(inputString2));  // Expected output: [60, 32, 250]
```
 */
