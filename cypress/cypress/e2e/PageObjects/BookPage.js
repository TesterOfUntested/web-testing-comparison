require('cypress-xpath');

class BookPage {

    verifyBookDetails(isbn, title, subTitle, author, publisher, totalPages, description, website) {
        this.verifyIsbn(isbn);
        this.verifyTitle(title);
        this.verifySubTitle(subTitle);
        this.verifyAuthor(author);
        this.verifyPublisher(publisher);
        this.verifyTotalPages(totalPages);
        this.verifyDescription(description);
        this.verifyWebsite(website);
    }

    verifyIsbn(isbn) {
        cy.xpath("//div[@id='ISBN-wrapper']//label[@id='userName-value']").should('have.text', isbn);
    }

    verifyTitle(title) {
        cy.xpath("//div[@id='title-wrapper']//label[@id='userName-value']").should('have.text', title);
    }

    verifySubTitle(subTitle) {
        cy.xpath("//div[@id='subtitle-wrapper']//label[@id='userName-value']").should('have.text', subTitle);
    }

    verifyAuthor(author) {
        cy.xpath("//div[@id='author-wrapper']//label[@id='userName-value']").should('have.text', author);
    }

    verifyPublisher(publisher) {
        cy.xpath("//div[@id='publisher-wrapper']//label[@id='userName-value']").should('have.text', publisher);
    }

    verifyTotalPages(totalPages) {
        cy.xpath("//div[@id='pages-wrapper']//label[@id='userName-value']").should('have.text', totalPages);
    }

    verifyDescription(description) {
        cy.xpath("//div[@id='description-wrapper']//label[@id='userName-value']").should('have.text', description);
    }

    verifyWebsite(website) {
        cy.xpath("//div[@id='website-wrapper']//label[@id='userName-value']").should('have.text', website);
    }


}

module.exports= new BookPage();