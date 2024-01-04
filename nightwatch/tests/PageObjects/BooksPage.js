class BooksPage {
    constructor(browser) {
      this.browser = browser;
    }
  
    open() {
      return this.browser.url('https://demoqa.com/').waitForElementVisible('#searchBox', 10000);
    }
  
    setInputInSearch(condition) {
      return this.browser.useCss().setValue('#searchBox', condition);
    }
  
    goToBook(bookName) {
      return this.browser.useXpath().click(`//a[text()='${bookName}']`);
    }
  }
  
  module.exports = BooksPage;
  