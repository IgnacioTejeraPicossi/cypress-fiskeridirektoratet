describe('Hjemmeside tester', () => {
    it('Verifiser at hjemmesiden laster korrekt', () => {
        cy.visit('/');
        cy.url().should('contains', 'Yrkesfiske');
        cy.url().should('contains', 'Akvakultur');
        cy.url().should('contains', 'Areal-og-miljo');
        cy.url().should('contains', 'Fritidsfiske');
        cy.url().should('contains', 'Turistfiske');
    });
});