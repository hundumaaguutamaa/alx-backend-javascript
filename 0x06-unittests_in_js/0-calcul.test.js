const assert = require('assert');
const calculateNumber = require('./0-calcul');

assert.strictEqual(calculateNumber(1.3, 2.4), 3, 'Test Case 1 Failed');
assert.strictEqual(calculateNumber(1.6, 2.7), 5, 'Test Case 2 Failed');
assert.strictEqual(calculateNumber(1.4, 2.5), 4, 'Test Case 3 Failed');
assert.strictEqual(calculateNumber(-1.3, -2.2), -3, 'Test Case 4 Failed');
assert.strictEqual(calculateNumber(-1.6, -2.5), -4, 'Test Case 5 Failed');
assert.strictEqual(calculateNumber(-1.4, -2.6), -4, 'Test Case 6 Failed');
assert.strictEqual(calculateNumber(0.2, 0.3), 0, 'Test Case 7 Failed');
assert.strictEqual(calculateNumber(1.5, -2.4), 0, 'Test Case 8 Failed');

console.log('All test cases pass');
