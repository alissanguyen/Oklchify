"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
function oklchToRgb(l, c, h, alpha) {
    // 1. Convert Oklch to Lab
    const a = c * Math.cos(h * (Math.PI / 180)); // Convert hue from degrees to radians
    const b1 = c * Math.sin(h * (Math.PI / 180));
    // 2. Convert Lab to XYZ (assuming D65 illuminant)
    let y = (l + 16) / 116;
    let x = a / 500 + y;
    let z = y - b1 / 200;
    const delta = 6 / 29;
    x = 0.95047 * (x > delta ? Math.pow(x, 3) : (x - 16 / 116) * 3 * Math.pow(delta, 2));
    y = 1.0 * (y > delta ? Math.pow(y, 3) : (y - 16 / 116) * 3 * Math.pow(delta, 2));
    z = 1.08883 * (z > delta ? Math.pow(z, 3) : (z - 16 / 116) * 3 * Math.pow(delta, 2));
    // 3. Convert XYZ to RGB
    let r = x * 3.2406 - y * 1.5372 - z * 0.4986;
    let g = -x * 0.9689 + y * 1.8758 + z * 0.0415;
    let b = x * 0.0557 - y * 0.204 + z * 1.057;
    // Convert linear RGB to sRGB (with gamma correction)
    r = r <= 0.0031308 ? 12.92 * r : 1.055 * Math.pow(r, (1 / 2.4)) - 0.055;
    g = g <= 0.0031308 ? 12.92 * g : 1.055 * Math.pow(g, (1 / 2.4)) - 0.055;
    b = b <= 0.0031308 ? 12.92 * b : 1.055 * Math.pow(b, (1 / 2.4)) - 0.055;
    // Ensure RGB values are within the 0-255 range
    r = Math.min(Math.max(Math.round(r * 255), 0), 255);
    g = Math.min(Math.max(Math.round(g * 255), 0), 255);
    b = Math.min(Math.max(Math.round(b * 255), 0), 255);
    if (alpha !== undefined) {
        // Ensure alpha is within the 0-255 range
        const a = Math.min(Math.max(Math.round(alpha), 0), 255);
        return [r, g, b, a];
    }
    return [r, g, b];
}
