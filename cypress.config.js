const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    //baseUrl: 'https://www.fiskeridir.no',  // Angi URL for lokal installasjon
    baseUrl: 'http://localhost:8080/site/default/master/no',  // Angi URL for lokal installasjon
    viewportWidth: 1280,                  // Sett skjermstørrelse (bredde)
    viewportHeight: 720,                  // Sett skjermstørrelse (høyde)
    //experimentalSessionAndOrigin: true, // Aktiverer eksperimentelle funksjoner
    setupNodeEvents(on, config) {
      // Legg til event-håndterere hvis nødvendig
    },
    env: {
      username: 'xxxxxx', //Include here your username
      password: 'yyyyy',//Include here your password
    },
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: false,
  },
  "experiment": true

});
