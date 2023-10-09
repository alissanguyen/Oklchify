const colorConvert = require('color-convert');

/**
 * Oklch color representation typically consists of three components: 
 * L (lightness), C (chroma), and H (hue). 
 * If a sentence has an Oklch color code, it will likely be formatted with three values. 
 * An example format could be oklch(60, 32, 250), where 60 represents lightness, 32 represents chroma, and 250 represents hue.
 * @param inputString 
 * @returns 
 */
function extractOklchValue(inputString: string): [number, number, number] | null {

    const regex = /oklch\((\d+),\s*(\d+),\s*(\d+)\)/;
    const match = inputString.match(regex);

    if (match && match.length === 4) {
        const l = parseInt(match[1]);
        const c = parseInt(match[2]);
        const h = parseInt(match[3]);
        return [l, c, h];
    }
    
    return null;
}

/**
 * EXAMPLE: 
```
const originalOklch = [60, 32, 250];
const modifiedOklch = modifyOklch(...originalOklch, 'light', 80);
console.log(modifiedOklch);  // Expected output: [80, 32, 250]
```
 */

type OklchOption = 'light' | 'contrast' | 'hue';

/**
 * Modifies a specific Oklch value based on the provided option.
 *
 * @param originalL - Original lightness value
 * @param originalC - Original chroma value
 * @param originalH - Original hue value
 * @param option - Which Oklch value to modify ('light', 'contrast', or 'hue')
 * @param newValue - The new value to set for the specified option
 * @returns - A tuple of the modified Oklch values: [L, C, H]
 */
function modifyOklch(
  originalL: number,
  originalC: number,
  originalH: number,
  option: OklchOption,
  newValue: number
): [number, number, number] {
  let l = originalL;
  let c = originalC;
  let h = originalH;

  switch (option) {
    case 'light':
      l = newValue;
      break;
    case 'contrast':
      c = newValue;
      break;
    case 'hue':
      h = newValue;
      break;
  }

  return [l, c, h];
}

/**
 * Converts Oklch values to RGB.
 *
 * Note: This is a simplified representation of the transformation process and might not be entirely accurate.
 * A full conversion requires consideration of gamma correction, chromatic adaptation, and other factors.
 *
 * @param l - Lightness value
 * @param c - Chroma value
 * @param h - Hue value in degrees
 * @returns - An array of RGB values: [R, G, B]
 */
function oklchToRgb(l: number, c: number, h: number): [number, number, number] {
    // 1. Convert Oklch to Lab
    const a = c * Math.cos(h * (Math.PI / 180));  // Convert hue from degrees to radians
    const b1 = c * Math.sin(h * (Math.PI / 180));

    // 2. Convert Lab to XYZ (assuming D65 illuminant)
    let y = (l + 16) / 116;
    let x = a / 500 + y;
    let z = y - b1 / 200;

    const delta = 6 / 29;

    x = 0.95047 * ((x > delta) ? x ** 3 : (x - 16 / 116) * 3 * delta ** 2);
    y = 1.00000 * ((y > delta) ? y ** 3 : (y - 16 / 116) * 3 * delta ** 2);
    z = 1.08883 * ((z > delta) ? z ** 3 : (z - 16 / 116) * 3 * delta ** 2);

    // 3. Convert XYZ to RGB
    let r = x * 3.2406 - y * 1.5372 - z * 0.4986;
    let g = -x * 0.9689 + y * 1.8758 + z * 0.0415;
    let b = x * 0.0557 - y * 0.2040 + z * 1.0570;

    // Convert linear RGB to sRGB (with gamma correction)
    r = (r <= 0.0031308) ? 12.92 * r : 1.055 * r ** (1 / 2.4) - 0.055;
    g = (g <= 0.0031308) ? 12.92 * g : 1.055 * g ** (1 / 2.4) - 0.055;
    b = (b <= 0.0031308) ? 12.92 * b : 1.055 * b ** (1 / 2.4) - 0.055;

    // Ensure RGB values are within the 0-255 range
    r = Math.min(Math.max(Math.round(r * 255), 0), 255);
    g = Math.min(Math.max(Math.round(g * 255), 0), 255);
    b = Math.min(Math.max(Math.round(b * 255), 0), 255);

    return [r, g, b];
}


module.exports = {extractOklchValue, modifyOklch, oklchToRgb};
