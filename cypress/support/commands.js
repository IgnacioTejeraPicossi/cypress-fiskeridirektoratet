// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', () => {
    cy.fixture('credentials').then((creds) => {
      cy.request({
        method: 'POST',
        url: 'http://localhost:8080/admin/site/preview/default/draft/no',
        body: {
          username: creds.username,
          password: creds.password,
        },
        failOnStatusCode: false // Forhindrer at testen mislykkes hvis den mottar en statuskode som ikke går ut.
      }).then((response) => {
        cy.setCookie('nombre_de_la_cookie', response.body.token);
      });
    });
  });