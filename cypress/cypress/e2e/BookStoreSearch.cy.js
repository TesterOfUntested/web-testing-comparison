import HomePage from "./PageObjects/HomePage";
import BooksPage from "./PageObjects/BooksPage";
import BookPage from "./PageObjects/BookPage";

describe('Book Store Application test suite', () => {

    before(() => {
        cy.visit('https://demoqa.com/');
        cy.title().should('include', 'DEMOQA');
    })
  
    let isbn = "9781449365035";
    let bookTitle = "Speaking JavaScript";
    let subTitle = "An In-Depth Guide for Programmers";
    let author = "Axel Rauschmayer";
    let publisher = "O'Reilly Media";
    let totalPages = "460";
    let description = "Like it or not, JavaScript is everywhere these days-from browser to server to mobile-and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who o";
    let website = "http://speakingjs.com/";

    it('Search and verify book details in Book Store Application', () => {
        HomePage.clickBookStoreApplication();
        BooksPage.setInputInSearch(bookTitle);
        BooksPage.goToBook(bookTitle);
        BookPage.verifyBookDetails(isbn, bookTitle, subTitle, author, publisher, totalPages, description, website);
    });
  });