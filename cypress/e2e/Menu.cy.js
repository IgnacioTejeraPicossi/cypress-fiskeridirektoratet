describe('Hjemmeside tester no', () => {
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

describe('Hjemmeside tester eng', () => {
    it('Test Eng menu', () => {
        cy.visit('http://localhost:8080/site/default/master/eng');
        cy.contains('Directorate of Fisheries').should('be.visible');  // Sjekk at teksten "Fiskeridirektoratet" er synlig
        cy.contains('Fisheries').should('be.visible'); 
        cy.contains('Aquaculture').should('be.visible'); 
        cy.contains('Coastal management').should('be.visible'); 
        cy.contains('Sea angling in Norway').should('be.visible'); 
        cy.contains('Search').should('be.visible'); 
      
    });

});