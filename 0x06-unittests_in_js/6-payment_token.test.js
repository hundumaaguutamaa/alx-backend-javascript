const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should resolve with the correct data when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done(); // Call done to indicate that the test is complete
      })
      .catch((error) => {
        done(error); // Pass the error to done if the promise is rejected
      });
  });

  it('should not resolve when success is false', (done) => {
    getPaymentTokenFromAPI(false)
      .then(() => {
        // We should not reach here
        done(new Error('Expected promise to be rejected'));
      })
      .catch(() => {
        // Expected behavior, do nothing
        done();
      });
  });
});
