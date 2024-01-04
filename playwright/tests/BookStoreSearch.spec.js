const { test, expect } = require('@playwright/test');
const HomePage = require('./PageObjects/HomePage');
const BooksPage = require('./PageObjects/BooksPage');
const BookPage = require('./PageObjects/BookPage');

test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com/');
    const title = await page.title();
    expect(title).toContain('DEMOQA');
});

let isbn = "9781449365035";
let bookTitle = "Speaking JavaScript";
let subTitle = "An In-Depth Guide for Programmers";
let author = "Axel Rauschmayer";
let publisher = "O'Reilly Media";
let totalPages = "460";
let description = "Like it or not, JavaScript is everywhere these days-from browser to server to mobile-and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who o";
let website = "http://speakingjs.com/";

test('Search and verify book details in Book Store Application', async ({ page }) => {
    await HomePage.clickBookStoreApplication(page);
    await BooksPage.setInputInSearch(page, bookTitle);
    await BooksPage.goToBook(page, bookTitle);
    await BookPage.verifyBookDetails(page, isbn, bookTitle, subTitle, author, publisher, totalPages, description, website);
});
