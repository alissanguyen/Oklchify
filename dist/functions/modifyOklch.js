"use strict";
/**
 * Modifies a specific Oklch value based on the provided option.
 *
 * @param originalL - Original lightness value
 * @param originalC - Original chroma value
 * @param originalH - Original hue value
 * @param originalA - Original alpha value
 * @param option - Which Oklch value to modify ('light', 'contrast', 'hue', or 'alpha')
 * @param newValue - The new value to set for the specified option
 * @returns - A tuple of the modified Oklch values: [L, C, H, A]
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.modifyOklch = void 0;
function modifyOklch(originalL, originalC, originalH, originalA, option, newValue) {
    let l = originalL;
    let c = originalC;
    let h = originalH;
    let a = originalA;
    switch (option) {
        case "light":
            l = newValue;
            break;
        case "contrast":
            c = newValue;
            break;
        case "hue":
            h = newValue;
            break;
        case "alpha":
            if (originalA !== undefined) {
                a = newValue;
            }
            break;
    }
    return originalA !== undefined ? [l, c, h, a] : [l, c, h];
}
exports.modifyOklch = modifyOklch;
