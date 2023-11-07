const { By, until, Key } = require('selenium-webdriver');

class BooksPage {
    constructor(driver) {
      this.driver = driver;
      this.open()
    }
  
    async open() {
      await this.driver.wait(until.titleIs('DEMOQA'), 10000);
      await this.driver.wait(until.elementIsVisible(this.driver.findElement(By.xpath("//input[@id='searchBox']"))), 100000);
    }

    async setInputInSearch(condition) {
        await this.driver.findElement(By.xpath("//input[@id='searchBox']")).sendKeys(condition);
    }

    async goToBook(bookName) {
        await this.driver.findElement(By.xpath("//a[text()='"+ bookName +"']")).click();
    }

}

module.exports = BooksPage;