const { Builder } = require('selenium-webdriver');
const HomePage = require('./PageObjects/HomePage');
const BooksPage = require('./PageObjects/BooksPage');
const BookPage = require('./PageObjects/BookPage');

const driver = new Builder()
  .forBrowser('chrome')
  .build();


  let isbn = "9781449365035";
  let bookTitle = "Speaking JavaScript";
  let subTitle = "An In-Depth Guide for Programmers";
  let author = "Axel Rauschmayer";
  let publisher = "O'Reilly Media";
  let totalPages = "460";
  let description = "Like it or not, JavaScript is everywhere these days-from browser to server to mobile-and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who o";
  let website = "http://speakingjs.com/";

  before(async () => {
    const homePage = new HomePage(driver);
    await homePage.open();
  });
  
  after(async () => {
    await driver.quit();
  });

it('Search and verify book details in Book Store Application', async () => {
  const homePage = new HomePage(driver);
  await homePage.clickBookStoreApplication();
  const booksPage = new BooksPage(driver);
  await booksPage.setInputInSearch("Speaking JavaScript");
  await booksPage.goToBook("Speaking JavaScript")
  const bookPage = new BookPage(driver);
  await bookPage.verifyBookDetails(isbn, bookTitle, subTitle, author, publisher, totalPages, description, website);
});