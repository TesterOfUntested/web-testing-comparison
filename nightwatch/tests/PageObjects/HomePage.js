class HomePage {
  constructor(browser) {
    this.browser = browser;
  }

  open() {
    this.browser.url('https://demoqa.com/')
    .useXpath()
    .assert.title('DEMOQA');
    return browser;
  }

  clickBookStoreApplication() {
    return this.browser.execute('scrollTo(0, 500);').useXpath()
      .click("//div[@class='category-cards']//div[contains(.,'Book Store Application') and @class = 'card-body']");
  }
}

module.exports = HomePage;
