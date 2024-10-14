describe('Test av søkefeltet på fiskeridirektoratet', () => {
    it('Bør tillate søk og vise resultater', () => {
      // Besøk siden
      cy.visit('http://localhost:8080/site/default/master/no/') // URL til siden som skal testes

      cy.get('.btn.btn--clear-dark.btn--sm.btn--search.search-icon').click();
      //a[@class='btn btn--clear-dark btn--sm btn--search search-icon']
      //.btn.btn--clear-dark.btn--sm.btn--search.search-icon
      
  
      // Velg søkefeltet og skriv inn et søkeord
      cy.get('.form-control.ui-autocomplete-input').eq(0)//input[@id='search'] søkefeltet
      .type('Dette brukes')
  
        
    
        // Simulerer "Enter"-tast eller klikk på søkeknappen
      cy.get('button[type="submit"]').click() // selektoren til riktig søkeknapp 
      cy.get('.btn.btn--searchsubmit').eq(0).click()
      //btn btn--searchsubmit
  
      // Sjekk at søkeresultatene vises
      cy.url().should('include', 'search') // Sjekk om URL-en endres, hvis søket leder til en ny side
      cy.url().should('include', 'Dette')
      cy.url().should('include', 'brukes')

      //Test sokeresultat
      //h2[normalize-space()='Dette brukes dataene til']
       //cy.get('Dette brukes dataene til') // Velg søkeresultatene med riktig CSS-selektor
        //.should('exist') // Sjekk at søkeresultater eksisterer
    })
  })