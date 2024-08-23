const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', () => {

    describe('SUM', () => {
        it('should return the sum of two rounded numbers', () => {
            expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
            expect(calculateNumber('SUM', 1.6, 2.3)).to.equal(4);
            expect(calculateNumber('SUM', -1.6, -2.3)).to.equal(-4);
        });
    });

    describe('SUBTRACT', () => {
        it('should return the difference of two rounded numbers', () => {
            expect(calculateNumber('SUBTRACT', 4.6, 2.2)).to.equal(3);
            expect(calculateNumber('SUBTRACT', 1.4, 2.7)).to.equal(-1);
            expect(calculateNumber('SUBTRACT', -1.4, -3.6)).to.equal(2);
        });
    });

    describe('DIVIDE', () => {
        it('should return the division of two rounded numbers', () => {
            expect(calculateNumber('DIVIDE', 6.2, 2.5)).to.equal(2);
            expect(calculateNumber('DIVIDE', 9.4, 2.3)).to.equal(3);
        });

        it('should return "Error" when dividing by 0', () => {
            expect(calculateNumber('DIVIDE', 4.6, 0.3)).to.equal('Error');
            expect(calculateNumber('DIVIDE', 1.6, 0)).to.equal('Error');
        });
    });

    describe('Invalid type', () => {
        it('should throw an error for an invalid operation type', () => {
            expect(() => calculateNumber('INVALID', 1, 2)).to.throw('Invalid operation type');
        });
    });

});
