import { describe, it } from "node:test";

// test/test.js
const assert = require('assert');
const parseAndModifyOklch = require('../index');

describe('Oklch Parser and Modifier', () => {
  it('should parse and modify Oklch color codes', () => {
    const inputString = 'This is an example oklch(70, 50, 120) color code.';
    const modifiedString = parseAndModifyOklch(inputString);

    assert.strictEqual(
      modifiedString,
      'This is an example rgb(255,0,0) color code.' // Replace with your expected output
    );
  });
});
