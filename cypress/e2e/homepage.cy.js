describe('Hjemmeside tester', () => {
    it('Verifiser at hjemmesiden laster korrekt', () => {
   
      //cy.login('username', 'password');
      //cy.visit('/');

      cy.visit('/');  // Dette tilsvarer å besøke 'http://localhost:8080/site/default/master/no'
      cy.contains('Fiskeridirektoratet').should('be.visible');  // Sjekk at teksten "Fiskeridirektoratet" er synlig
      
    });
  });