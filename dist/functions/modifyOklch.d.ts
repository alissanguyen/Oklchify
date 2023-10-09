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
import { OklchOption, OklchValue } from "./functions";
export declare function modifyOklch(originalL: number, originalC: number, originalH: number, originalA: number, option: OklchOption, newValue: number): OklchValue;
