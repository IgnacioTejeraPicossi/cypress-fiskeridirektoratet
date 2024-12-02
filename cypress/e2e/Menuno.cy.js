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

    it('Test NO under menu Yrkesfiske', () => {
        cy.visit('/');
        cy.visit('http://localhost:8080/site/default/master/no/Yrkesfiske');
        cy.contains('Yrkesfiske').should('be.visible');
           /* ==== Test meny opsjon ==== */
        cy.visit('/');
        cy.visit('http://localhost:8080/site/default/master/no/Yrkesfiske/Rapportering-paa-havet');
        cy.get('[class="btn-nav__title"]').eq(0).click();
        cy.contains('Rapportering på havet');        
        
        cy.visit('/');
        cy.visit('http://localhost:8080/site/default/master/no/Yrkesfiske/Rapportering-ved-landing');
        cy.get('[class="btn-nav__title"]').eq(1).click();
        cy.contains('Rapportering ved landing');  
        
        cy.visit('/');
        cy.visit('http://localhost:8080/site/default/master/no/Yrkesfiske/Regelverk-og-reguleringer');
        cy.get('[class="btn-nav__title"]').eq(2).click();
        cy.contains('Regelverk og reguleringer');  

        cy.visit('/');
        cy.visit('http://localhost:8080/site/default/master/no/Yrkesfiske/Kontroll');
        cy.get('[class="btn-nav__title"]').eq(3).click();
        cy.contains('Kontroll');  

        //cy.visit('/');
        //cy.visit('http://localhost:8080/site/default/master/no/Yrkesfiske/omsetning-fisk');
        //cy.get('[class="btn-nav__title"]').eq(4).click();
        //cy.contains('Omsetning');  

        cy.visit('/');
        cy.visit('http://localhost:8080/site/default/master/no/Yrkesfiske/Registre-og-skjema');
        cy.get('[class="btn-nav__title"]').eq(5).click();
        cy.contains('Registre');  

        cy.visit('/');
        cy.visit('http://localhost:8080/site/default/master/no/Yrkesfiske/Havmiljoe');
        cy.contains('Havmiljø');  

        cy.visit('/');
        cy.visit('http://localhost:8080/site/default/master/no/Yrkesfiske/fangstid');
        cy.contains('FangstID');  

        cy.visit('/');
        cy.visit('http://localhost:8080/site/default/master/no/Yrkesfiske/Tall-og-analyse');
        cy.contains('Tall og analyse: Yrkesfiske');  

        cy.visit('/');
        cy.visit('http://localhost:8080/site/default/master/no/Yrkesfiske');
        cy.get('[class="btn-nav__title"]').eq(9).click();
        cy.contains('Fiskeri');  

        cy.visit('/');
        cy.visit('http://localhost:8080/site/default/master/no/Yrkesfiske/Dokumenter');
        cy.contains('Dokumenter - yrkesfiske');  

        cy.visit('/');
        cy.visit('http://localhost:8080/site/default/master/no/Yrkesfiske/Tema');
        cy.get('[class="btn-nav__title"]').eq(11).click();
        cy.contains('Tema');  

	
      });

      it('Test NO under menu Akvakultur', () => {
        cy.visit('/');
        cy.visit('http://localhost:8080/site/default/master/no/Akvakultur');
        cy.contains('Akvakultur').should('be.visible');
           /* ==== Test meny opsjon ==== */
        cy.visit('/');
        cy.visit('http://localhost:8080/site/default/master/no/Akvakultur/Tildeling-og-tillatelser');
        cy.get('[class="btn-nav__title"]').eq(0).click();
        cy.contains('Tildeling og tillatelser');        
        
        cy.visit('/');
        cy.visit('http://localhost:8080/site/default/master/no/Akvakultur/Drift-og-tilsyn');
        cy.get('[class="btn-nav__title"]').eq(1).click();
        cy.contains('Drift og tilsyn');  
        
        cy.visit('/');
        cy.visit('http://localhost:8080/site/default/master/no/Akvakultur/Delt-kunnskap-og-erfaring');
        cy.get('[class="btn-nav__title"]').eq(2).click();
        cy.contains('Delt kunnskap og erfaring');  

        //cy.visit('/');
        //cy.visit('http://localhost:8080/site/default/master/no/Akvakultur/Dokumenter');
        //cy.get('[class="btn-nav__title"]').eq(3).click();
        //cy.contains('Dokumenter');  

        cy.visit('/');
        cy.visit('http://localhost:8080/site/default/master/no/Akvakultur/Registre-og-skjema');
        cy.get('[class="btn-nav__title"]').eq(4).click();
        cy.contains('Registre og skjema');  

        cy.visit('/');
        cy.visit('http://localhost:8080/site/default/master/no/Akvakultur/Tall-og-analyse');
        cy.get('[class="btn-nav__title"]').eq(5).click();
        cy.contains('Tall og analyse');  

        cy.visit('/');
        cy.visit('http://localhost:8080/site/default/master/no/Akvakultur/Tema');
        cy.get('[class="btn-nav__title"]').eq(6).click();
        cy.contains('Tema');  

        cy.visit('/');
        cy.visit('http://localhost:8080/site/default/master/no/Akvakultur/Akvakulturloven-og-forskrifter');
        cy.get('[class="btn-nav__title"]').eq(7).click();
        cy.contains('Akvakulturloven og forskrifter');  
      });

});

