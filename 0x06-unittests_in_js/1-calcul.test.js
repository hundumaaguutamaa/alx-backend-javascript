const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {

    describe('SUM', () => {
        it('should return the sum of two rounded numbers', () => {
            assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
            assert.strictEqual(calculateNumber('SUM', 1.6, 2.3), 4);
            assert.strictEqual(calculateNumber('SUM', -1.6, -2.3), -4);
        });
    });

    describe('SUBTRACT', () => {
        it('should return the difference of two rounded numbers', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 4.6, 2.2), 3);
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 2.7), -1);
            assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -3.6), 2);
        });
    });

    describe('DIVIDE', () => {
        it('should return the division of two rounded numbers', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 6.2, 2.5), 2);
            assert.strictEqual(calculateNumber('DIVIDE', 9.4, 2.3), 3);
        });

        it('should return "Error" when dividing by 0', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 4.6, 0.3), 'Error');
            assert.strictEqual(calculateNumber('DIVIDE', 1.6, 0), 'Error');
        });
    });

    describe('Invalid type', () => {
        it('should throw an error for an invalid operation type', () => {
            assert.throws(() => calculateNumber('INVALID', 1, 2), /Invalid operation type/);
        });
    });

});
