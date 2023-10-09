"use strict";
const colorConvert = require('color-convert');
function parseAndModifyOklch(inputString) {
    const regex = /oklch\(([^)]+)\)/g;
    const modifiedString = inputString.replace(regex, (match, colorCode) => {
        const [l, c, h] = colorCode.split(',').map(parseFloat);
        const rgb = colorConvert.oklch.rgb([l, c, h]);
        const modifiedColor = modifyColor(rgb); // Replace this with your color modification logic
        return `rgb(${modifiedColor.join(',')})`;
    });
    return modifiedString;
}
function modifyColor(rgb) {
    // Implement your color modification logic here
    return rgb;
}
module.exports = parseAndModifyOklch;
