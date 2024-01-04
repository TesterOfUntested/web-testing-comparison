const { By, until, Key } = require('selenium-webdriver');
const assert = require('assert');

class BookPage {
    constructor(driver) {
      this.driver = driver;
      this.open()
    }

    async open() {
      await this.driver.wait(until.titleIs('DEMOQA'), 10000);
      await this.driver.wait(until.elementIsVisible(this.driver.findElement(By.xpath("//button[@id='addNewRecordButton']"))), 10000);
    }

    async verifyBookDetails(isbn, title, subTitle, author, publisher, totalPages, description, website) {
        this.verifyIsbn(isbn);
        this.verifyTitle(title);
        this.verifySubTitle(subTitle);
        this.verifyAuthor(author);
        this.verifyPublisher(publisher);
        this.verifyTotalPages(totalPages);
        this.verifyDescription(description);
        this.verifyWebsite(website);
    }

    async verifyIsbn(isbn) {
        const actualIsbn = await this.driver.findElement(By.xpath("//div[@id='ISBN-wrapper']//label[@id='userName-value']")).getText();
        assert.strictEqual(actualIsbn, isbn, 'Expected ISBN: ${isbn}, but found: ${actualIsbn}');
    }

    async verifyTitle(title) {
        const actualTitle= await this.driver.findElement(By.xpath("//div[@id='title-wrapper']//label[@id='userName-value']")).getText();
        assert.strictEqual(actualTitle, title, 'Expected Title: ${title}, but found: ${actualTitle}');
    }

    async verifySubTitle(subTitle) {
        const actualSubTitle= await this.driver.findElement(By.xpath("//div[@id='subtitle-wrapper']//label[@id='userName-value']")).getText();
        assert.strictEqual(actualSubTitle, subTitle, 'Expected SubTitle: ${subTitle}, but found: ${actualSubTitle}');
    }

    async verifyAuthor(author) {
        const actualAuthor = await this.driver.findElement(By.xpath("//div[@id='author-wrapper']//label[@id='userName-value']")).getText();
        assert.strictEqual(actualAuthor, author, 'Expected Author: ${author}, but found: ${actualAuthor}');
    }

    async verifyPublisher(publisher) {
        const actualPublisher = await this.driver.findElement(By.xpath("//div[@id='publisher-wrapper']//label[@id='userName-value']")).getText();
        assert.strictEqual(actualPublisher, publisher, 'Expected Publisher: ${publisher}, but found: ${actualPublisher}');
    }

    async verifyTotalPages(totalPages) {
        const actualTotalPages = await this.driver.findElement(By.xpath("//div[@id='pages-wrapper']//label[@id='userName-value']")).getText();
        assert.strictEqual(actualTotalPages, totalPages, 'Expected Total Pages: ${totalPages}, but found: ${actualTotalPages}');
    }

    async verifyDescription(description) {
        const actualDescription = await this.driver.findElement(By.xpath("//div[@id='description-wrapper']//label[@id='userName-value']")).getText();
        assert.strictEqual(actualDescription, description, 'Expected Description: ${description}, but found: ${actualDescription}');
    }

    async verifyWebsite(website) {
        const actualWebsite = await this.driver.findElement(By.xpath("//div[@id='website-wrapper']//label[@id='userName-value']")).getText();
        assert.strictEqual(actualWebsite, website, 'Expected Website: ${website}, but found: ${actualWebsite}');
    }
}

module.exports = BookPage;