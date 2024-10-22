describe('Navigasjonstester', () => {
    it('Naviger til kontakt-siden', () => {
      cy.visit('/');
      cy.get('[href="/site/default/master/no/Yrkesfiske/Rapportering-paa-havet"]').click();  // Klikk på lenken til "Yrkesfiske" siden
      cy.url().should('include', 'Norsk');  // Bekreft at URL-en inkluderer /kontakt
    });
  });

  //<a class="btn btn-primary active" href="/Yrkesfiske">
  //              Yrkesfiske
  //            </a>

  //<a class="btn btn--clear-dark btn--sm btn--login" href="https://sikker.fiskeridir.no/minside/" target="_blank">
  //              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  //                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.875 6.75C16.875 10.5 14.25 12 12 12C9.75 12 7.125 10.5 7.125 6.75C7.125 3.84938 9 1.5 12 1.5C15 1.5 16.875 3.84938 16.875 6.75ZM3 20.5C3 17.84 6 14.25 12 14.25C18 14.25 21 17.84 21 20.5V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V20.5Z" fill="white"></path>
  //              </svg>
  //
  //              Logg inn
  //            </a>