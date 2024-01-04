class HomePage {
    async clickBookStoreApplication(page) {
        await page.click("//div[@class='category-cards']//div[contains(.,'Book Store Application') and @class = 'card-body']");
    }
}
  
module.exports = new HomePage();
  