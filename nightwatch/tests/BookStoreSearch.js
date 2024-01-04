const HomePage = require('./PageObjects/HomePage');
const BooksPage = require('./PageObjects/BooksPage');
const BookPage = require('./PageObjects/BookPage');

let expectedValues = {
  isbn: "9781449365035",
  title: "Speaking JavaScript",
  subTitle: "An In-Depth Guide for Programmers",
  author: "Axel Rauschmayer",
  publisher: "O'Reilly Media",
  totalPages: "460",
  description: "Like it or not, JavaScript is everywhere these days",
  website: "http://speakingjs.com/"
};

module.exports = {
  before: function (browser) {
    const homePage = new HomePage(browser);
    homePage.open();
  },

  after: function (browser) {
    browser.end();
  },

  'Search and verify book details in Book Store Application': function (browser) {
    const homePage = new HomePage(browser);
    const booksPage = new BooksPage(browser);
    const bookPage = new BookPage(browser);

    homePage.clickBookStoreApplication();
    booksPage.setInputInSearch("Speaking JavaScript");
    booksPage.goToBook("Speaking JavaScript");
    bookPage.verifyBookDetails(expectedValues);
  }
};
