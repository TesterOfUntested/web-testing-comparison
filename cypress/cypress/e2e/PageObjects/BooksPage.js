require('cypress-xpath');

class BooksPage {
    setInputInSearch(condition) {
        cy.xpath("//input[@id='searchBox']").type(condition);
    }

    goToBook(bookName) {
        cy.xpath("//a[text()='"+ bookName +"']").click();
    }
}

module.exports = new BooksPage();