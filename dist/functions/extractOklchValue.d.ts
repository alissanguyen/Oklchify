/**
 * Oklch color representation typically consists of three components:
 * L (lightness), C (chroma), and H (hue).
 * If a sentence has an Oklch color code, it will likely be formatted with three values.
 * An example format could be oklch(60, 32, 250), where 60 represents lightness, 32 represents chroma, and 250 represents hue.
 * @param inputString
 * @returns
 */
import { OklchValue } from "./functions";
export declare function extractOklchValue(inputString: string): OklchValue | null;
/**
 * EXAMPLE:
```
const inputString1 = "The color is oklch(60, 32, 250, 80) with transparency.";
console.log(extractOklchValue(inputString1));  // Expected output: [60, 32, 250, 80]

const inputString2 = "The color is oklch(60, 32, 250) without transparency.";
console.log(extractOklchValue(inputString2));  // Expected output: [60, 32, 250]
```
 */
