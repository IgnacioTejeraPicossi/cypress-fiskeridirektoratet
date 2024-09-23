describe('Skjematester', () => {
    it('Sender inn kontaktskjema', () => {
      cy.visit('/kontakt');
      cy.get('#navn').type('Ola Nordmann');
      cy.get('#epost').type('ola@example.com');
      cy.get('#melding').type('Dette er en testmelding.');
      cy.get('button[type="submit"]').click();
      cy.contains('Din melding har blitt sendt').should('be.visible');
    });
  });