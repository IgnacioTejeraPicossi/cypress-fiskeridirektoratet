describe('Responsivitetstester', () => {
    it('Test på iPhone X', () => {
      cy.viewport('iphone-x');
      cy.visit('/');
      cy.get('nav').should('be.visible');
    });
  
    it('Test i skrivebordsoppløsning', () => {
      cy.viewport(1280, 720);  // Skrivebordsoppløsning
      cy.visit('/');
      cy.get('nav').should('be.visible');
    });
  });