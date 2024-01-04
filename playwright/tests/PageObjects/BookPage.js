const { expect } = require('@playwright/test');

class BookPage {
    async verifyBookDetails(page, isbn, title, subTitle, author, publisher, totalPages, description, website) {
        await this.verifyIsbn(page, isbn);
        await this.verifyTitle(page, title);
        await this.verifySubTitle(page, subTitle);
        await this.verifyAuthor(page, author);
        await this.verifyPublisher(page, publisher);
        await this.verifyTotalPages(page, totalPages);
        await this.verifyDescription(page, description);
        await this.verifyWebsite(page, website);
    }

    async verifyIsbn(page, isbn) {
        const isbnText = await page.locator("//div[@id='ISBN-wrapper']//label[@id='userName-value']").textContent();
        expect(isbnText).toBe(isbn);
    }

    async verifyTitle(page, title) {
        const titleText = await page.locator("//div[@id='title-wrapper']//label[@id='userName-value']").textContent();
        expect(titleText).toBe(title);
    }

    async verifySubTitle(page, subTitle) {
        const subTitleText = await page.locator("//div[@id='subtitle-wrapper']//label[@id='userName-value']").textContent();
        expect(subTitleText).toBe(subTitle);
    }

    async verifyAuthor(page, author) {
        const authorText = await page.locator("//div[@id='author-wrapper']//label[@id='userName-value']").textContent();
        expect(authorText).toBe(author);
    }

    async verifyPublisher(page, publisher) {
        const publisherText = await page.locator("//div[@id='publisher-wrapper']//label[@id='userName-value']").textContent();
        expect(publisherText).toBe(publisher);
    }

    async verifyTotalPages(page, totalPages) {
        const totalPagesText = await page.locator("//div[@id='pages-wrapper']//label[@id='userName-value']").textContent();
        expect(totalPagesText).toBe(totalPages);
    }

    async verifyDescription(page, description) {
        const descriptionText = await page.locator("//div[@id='description-wrapper']//label[@id='userName-value']").textContent();
        expect(descriptionText).toBe(description);
    }

    async verifyWebsite(page, website) {
        const websiteText = await page.locator("//div[@id='website-wrapper']//label[@id='userName-value']").textContent();
        expect(websiteText).toBe(website);
    }
}

module.exports = new BookPage();