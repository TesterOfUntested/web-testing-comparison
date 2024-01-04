class BooksPage {
    async setInputInSearch(page, condition) {
        await page.type("//input[@id='searchBox']", condition);
    }

    async goToBook(page, bookName) {
        await page.click(`//a[text()='${bookName}']`);
    }
}

module.exports = new BooksPage();
  