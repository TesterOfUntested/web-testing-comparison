class BookPage {
    constructor(browser) {
      this.browser = browser;
    }
  
    open() {
      return this.browser.url('https://demoqa.com/').waitForElementVisible('#addNewRecordButton', 10000);
    }
  
    verifyIsbn(expectedValue) {
      return this.browser.expect.element("//div[@id='ISBN-wrapper']//label[@id='userName-value']").text.to.equal(expectedValue);
    }
  
    verifyTitle(expectedValue) {
      return this.browser.expect.element("//div[@id='title-wrapper']//label[@id='userName-value']").text.to.equal(expectedValue);
    }
  
    // Add similar methods for other properties
  
    verifyBookDetails(expectedValues) {
      this.verifyIsbn(expectedValues.isbn);
      this.verifyTitle(expectedValues.title);
      // Call other verification methods
    }
  }
  
  module.exports = BookPage;
  