describe('Test na stronie demoqa.com', () => {
    it('Otwórz stronę i sprawdź tytuł', () => {
      cy.visit('https://demoqa.com/');
  
      cy.title().should('include', 'DEMOQA');
    });
  });