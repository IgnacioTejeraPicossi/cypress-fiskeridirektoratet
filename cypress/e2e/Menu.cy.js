describe('Hjemmeside tester', () => {
    it('Verifiser at hjemmesiden laster korrekt', () => {
        cy.visit('https://www.fiskeridir.no/');
        cy.url().should('contains', 'https://www.fiskeridir.no/Yrkesfiske');
        cy.url().should('contains', 'https://www.fiskeridir.no/Akvakultur');
        cy.url().should('contains', 'https://www.fiskeridir.no/Areal-og-miljo');
        cy.url().should('contains', 'https://www.fiskeridir.no/Fritidsfiske');
        cy.url().should('contains', 'https://www.fiskeridir.no/Turistfiske');
    });
});