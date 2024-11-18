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
    it('Test ENG under menu Fisheries', () => {
        cy.visit('/');
        cy.visit('http://localhost:8080/site/default/master/eng/Fisheries');
        cy.contains('Fisheries').should('be.visible');
        
        /* ==== Test sub meny opsjoner ==== */
        cy.visit('/');
        cy.visit('http://localhost:8080/site/default/master/eng/Fisheries');
        cy.get('[class="btn-nav__title"]').eq(0).click();
        cy.contains('Norwegian Fisheries Management').should('be.visible');       
        
        //cy.visit('/');
        cy.visit('http://localhost:8080/site/default/master/eng/Fisheries');
        cy.get('[class="btn-nav__title"]').eq(1).click();
        cy.contains('Control and enforcement');       

        cy.visit('http://localhost:8080/site/default/master/eng/Fisheries');
        cy.get('[class="btn-nav__title"]').eq(2).click();
        cy.contains('Norwegian conversion factors');   

        cy.visit('http://localhost:8080/site/default/master/eng/Fisheries');
        cy.get('[class="btn-nav__title"]').eq(3).click();
        cy.contains('Evaluation of Norway');   

        cy.visit('http://localhost:8080/site/default/master/eng/Fisheries');
        cy.get('[class="btn-nav__title"]').eq(4).click();
        cy.contains('Regulations');   

        cy.visit('http://localhost:8080/site/default/master/eng/Fisheries');
        cy.get('[class="btn-nav__title"]').eq(5).click();
        cy.contains('Statistics for fisheries');   
      	
      });

});