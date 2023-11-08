require('cypress-xpath');

class HomePage{

    clickBookStoreApplication(){
        cy.xpath("//div[@class='category-cards']//div[contains(.,'Book Store Application') and @class = 'card-body']").click();
    }
}

module.exports = new HomePage();