describe('Hjemmeside tester', () => {
    it('Test NO menu', () => {
        cy.visit('/');
        cy.contains('Fiskeridirektoratet').should('be.visible');  // Sjekk at teksten "Fiskeridirektoratet" er synlig
        cy.contains('Akvakultur').should('be.visible'); 
        cy.contains('Yrkesfiske').should('be.visible'); 
        cy.contains('Areal og miljø').should('be.visible'); 
        cy.contains('Fritidsfiske').should('be.visible'); 
        cy.contains('Turistfiske').should('be.visible'); 
        cy.contains('Logg inn').should('be.visible'); 
        cy.contains('Søk').should('be.visible'); 
      

    });
});