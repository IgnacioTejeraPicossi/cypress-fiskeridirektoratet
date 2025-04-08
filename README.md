# Cypress Fiskeridir Test Project

This project contains automated tests for the Directorate of Fisheries (Fiskeridirektoratet) website using Cypress.

## Description

This test suite verifies functionality of the Fiskeridirektoratet website, including navigation, menu structure, search functionality, and form submission.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/cypress-fiskeridir.git
   cd cypress-fiskeridir
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Configuration

The main configuration file is `cypress.config.js`, which contains:
- Base URL (currently set to `http://localhost:8080/site/default/master/no`)
- Viewport settings
- Environment variables for authentication
- Reporter configuration (Mochawesome)

## Usage

To run the tests:

```bash
# Open Cypress Test Runner
npx cypress open

# Run tests in headless mode
npx cypress run
```

## Project Structure

```
cypress-fiskeridir/
├── .git/                     # Git repository data
├── cypress/
│   ├── e2e/                  # Test files
│   │   ├── Menuno.cy.js      # Norwegian menu tests
│   │   ├── Menueng.cy.js     # English menu tests
│   │   ├── visores.cy.js     # Visualization resources tests
│   │   ├── login.cy.js       # Login functionality tests
│   │   ├── navigation.cy.js  # Navigation tests
│   │   ├── search.cy.js      # Search functionality tests
│   │   ├── homepage.cy.js    # Homepage tests
│   │   └── form.cy.js        # Form submission tests
│   ├── fixtures/             # Test data
│   │   ├── credentials.json  # User credentials for tests
│   │   └── example.json      # Example test data
│   ├── reports/              # Generated test reports
│   ├── screenshots/          # Screenshots captured during test runs
│   └── support/              # Support files
│       ├── commands.js       # Custom Cypress commands
│       └── e2e.js            # e2e test configuration
├── node_modules/             # Dependencies
├── cypress.config.js         # Cypress configuration
├── package-lock.json         # Dependency lock file
├── package.json              # Project metadata and dependencies
└── README.md                 # Project documentation
```

## Tests

The test suite includes:

- **Homepage Tests** - Verify homepage content and functionality
- **Menu Tests** - Check correct navigation and structure for Norwegian and English menus
- **Login Tests** - Validate user authentication process 
- **Search Tests** - Test the site's search functionality
- **Form Tests** - Verify form submission
- **Navigation Tests** - Test site navigation between pages
- **Visualization Tests** - Test various resource visualizations

## Reports

The project uses Mochawesome for test reporting. Reports are generated in the `cypress/reports` directory after running tests.

## Dependencies

- Cypress: ^13.14.2
- Mochawesome: ^7.1.3
- Mochawesome-merge: ^4.3.0
- Mochawesome-report-generator: ^6.2.0

## Author

Ignacio Tejera

## License

ISC 