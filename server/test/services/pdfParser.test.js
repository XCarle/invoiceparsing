const pdfParser = require('../../services/pdfParser');

describe('pdfParser', function () {
  before(fucntion() {
    this.server = http.createServer(app).listen(3000);
    // initialize the browser using the same port as the test application
    this.browser = new Browser({ site: 'http://localhost:3000' });
  });

  before(function(done) {
    this.browser.visit('/', done);
  });

  describe('#extractVatNumbersFromFile', () => {
    it('should implement a test', () => {
      throw new Error('Not implemented yet!');
    });
  });
});
