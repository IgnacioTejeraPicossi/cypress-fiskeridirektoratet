describe('Logg inn test no', () => {
    it('Test NO logg inn', () => {
        cy.visit('/');
        cy.visit('http://localhost:8080/site/default/master/no/');
        cy.contains('Logg inn').should('be.visible');
           /* ==== Test meny opsjon ==== */
        cy.visit('/');
        cy.visit('http://localhost:8080/site/default/master/no/');
        cy.get('.btn.btn--clear-dark.btn--sm.btn--login').click();
        
        //Test ID-porten må testes og lukke. 
        //cy.visit('/');
        //cy.visit('https://login.idporten.no/authorize/selector');
        //cy.contains('ID-porten');    
                
        cy.visit('/');
        cy.reload();
           

    });
});