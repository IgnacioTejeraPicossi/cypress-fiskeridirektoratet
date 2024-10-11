describe('Hjemmeside norsk test', () => {
    it('Verifiser at hjemmesiden laster korrekt', () => {
   
      //cy.login('username', 'password');
      //cy.visit('/');

      cy.visit('/');  // Dette tilsvarer å besøke 'http://localhost:8080/site/default/master/no'
      cy.contains('Fiskeridirektoratet').should('be.visible');  // Sjekk at teksten "Fiskeridirektoratet" er synlig
      
    });
  });

  describe('Hjemmeside engelsk test', () => {
    it('Verifiser at hjemmesiden laster korrekt', () => {
   
      //cy.login('username', 'password');
      //cy.visit('/');

      cy.visit('http://localhost:8080/site/default/master/eng');  // Dette tilsvarer å besøke 'http://localhost:8080/site/default/master/eng'
      cy.contains('Directorate of Fisheries').should('be.visible');  // Sjekk at teksten "Directorate of Fisheries" er synlig
      
    });
  });