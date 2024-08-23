const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  beforeEach(() => {
    // Create a spy for console.log before each test
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the spy after each test
    consoleSpy.restore();
  });

  it('should log the correct message for (100, 20)', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledOnceWith('The total is: 120')).to.be.true;
  });

  it('should log the correct message for (10, 10)', () => {
    sendPaymentRequestToApi(10, 10);
    expect(consoleSpy.calledOnceWith('The total is: 20')).to.be.true;
  });
});
