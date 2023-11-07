const { By, until } = require('selenium-webdriver');

class HomePage {
  constructor(driver) {
    this.driver = driver;
  }

  async open() {
    await this.driver.get('https://demoqa.com/');
    await this.driver.wait(until.titleIs('DEMOQA'), 10000);
  }

  async clickBookStoreApplication() {
      this.driver.executeScript('window.scrollBy(0, 500);');
      await this.driver.findElement(By.xpath("//div[@class='category-cards']//div[contains(.,'Book Store Application') and @class = 'card-body']")).click();
  }
}

module.exports = HomePage;