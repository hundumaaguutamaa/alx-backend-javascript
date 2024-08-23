const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with the correct arguments and log the correct message', () => {
    // Stub Utils.calculateNumber to always return 10
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consoleSpy = sinon.spy(console, 'log');
    
    sendPaymentRequestToApi(100, 20);
    
    // Verify the stub was called with the correct arguments
    expect(stub.calledOnceWith('SUM', 100, 20)).to.be.true;
    
    // Verify console.log was called with the correct message
    expect(consoleSpy.calledOnceWith('The total is: 10')).to.be.true;
    
    // Restore the stub and spy
    stub.restore();
    consoleSpy.restore();
  });
});
