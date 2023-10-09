import { describe, it } from "node:test";

// test/test.js
const assert = require('assert');
const extractOklchValue = require('../src/functions/extractOklchValue');

describe('Oklch extractor', () => {
  it('should extract Oklch color codes', () => {
    const inputString = 'This is an example oklch(70, 50, 120) color code.';
    const modifiedString = extractOklchValue(inputString);

    assert.strictEqual(
      modifiedString,
      '(70, 50, 120)' // Replace with your expected output
    );
  });
});
