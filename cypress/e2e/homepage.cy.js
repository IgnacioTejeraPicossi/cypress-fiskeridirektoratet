describe('Hjemmeside tester', () => {
    it('Verifiser at hjemmesiden laster korrekt', () => {
      cy.visit('/');  // Dette tilsvarer å besøke 'http://localhost:3000/nohttp://localhost:8080/admin/site/preview/default/draft/no'
      cy.contains('Fiskeridirektoratet').should('be.visible');  // Sjekk at teksten "Fiskeridirektoratet" er synlig
    });
  });