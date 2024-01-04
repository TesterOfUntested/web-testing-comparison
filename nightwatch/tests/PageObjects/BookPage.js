class BookPage {
  constructor(browser) {
    this.browser = browser;
  }

  open() {
    return this.browser.url('https://demoqa.com/').waitForElementVisible('#addNewRecordButton', 10000);
  }

  verifyBookDetails(expectedValues) {
      this.verifyIsbn(expectedValues.isbn);
      this.verifyTitle(expectedValues.title);
      this.verifySubTitle(expectedValues.subTitle);
      this.verifyAuthor(expectedValues.author);
      this.verifyPublisher(expectedValues.publisher);
      this.verifyTotalPages(expectedValues.totalPages);
      this.verifyDescription(expectedValues.description);
      this.verifyWebsite(expectedValues.website);
    }

  verifyIsbn(expectedValue) {
    return this.browser.expect.element("//div[@id='ISBN-wrapper']//label[@id='userName-value']").text.to.equal(expectedValue);
  }

  verifyTitle(expectedValue) {
    return this.browser.expect.element("//div[@id='title-wrapper']//label[@id='userName-value']").text.to.equal(expectedValue);
  }

  verifySubTitle(expectedValue) {
    return this.browser.expect.element("//div[@id='subtitle-wrapper']//label[@id='userName-value']").text.to.equal(expectedValue);
  }

  verifyAuthor(expectedValue) {
    return this.browser.expect.element("//div[@id='author-wrapper']//label[@id='userName-value']").text.to.equal(expectedValue);
  }

  verifyPublisher(expectedValue) {
    return this.browser.expect.element("//div[@id='publisher-wrapper']//label[@id='userName-value']").text.to.equal(expectedValue);
  }

  verifyTotalPages(expectedValue) {
    return this.browser.expect.element("//div[@id='pages-wrapper']//label[@id='userName-value']").text.to.equal(expectedValue);
  }

  verifyDescription(expectedValue) {
    return this.browser.expect.element("//div[@id='description-wrapper']//label[@id='userName-value']").text.to.contain(expectedValue);
  }

  verifyWebsite(expectedValue) {
    return this.browser.expect.element("//div[@id='website-wrapper']//label[@id='userName-value']").text.to.equal(expectedValue);
  }
}

module.exports = BookPage;
