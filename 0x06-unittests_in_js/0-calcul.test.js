const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
    it('should correctly round and sum both numbers when both are rounded down', () => {
        assert.strictEqual(calculateNumber(1.3, 2.4), 3);
        assert.strictEqual(calculateNumber(-1.3, -2.2), -3);
    });

    it('should correctly round and sum both numbers when both are rounded up', () => {
        assert.strictEqual(calculateNumber(1.6, 2.7), 5);
        assert.strictEqual(calculateNumber(-1.6, -2.5), -4);
    });

    it('should correctly round and sum when one number rounds down and the other rounds up', () => {
        assert.strictEqual(calculateNumber(1.4, 2.5), 4);
        assert.strictEqual(calculateNumber(-1.4, -2.6), -4);
    });

    it('should handle edge cases where both numbers round to zero', () => {
        assert.strictEqual(calculateNumber(0.2, 0.3), 0);
    });

    it('should correctly round and sum when one positive and one negative number are used', () => {
        assert.strictEqual(calculateNumber(1.5, -2.4), 0);
    });
});
