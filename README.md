# End-to-end tests for the Journal of Digital History

This repository contains end-to-end tests for the Impresso web application. We use [Cypress](https://www.cypress.io/) as the testing framework. All tests are located in the `cypress/e2e` directory.

## Running the tests

Clone this repository and install the dependencies:

```bash
yarn install
```

By default the tests run against the development environment ([https://journalofdigitalhistory.org/en](https://journalofdigitalhistory.org/en)). To run the tests against a different environment, set the `BASE_URL` variable in the `.env` file to the location of the app (e.g. `https://localhost:5173` for the development environment).

### Cypress test runner in terminal

/!\ If you want to run the test, do not forget to run the front-end first on localhost 5173.

To open the Cypress test runner, execute the following command:

```bash
yarn run cy:run
```

### Cypress test UI in browser

/!\ If you want to run the test, do not forget to run the front-end first on localhost 5173.

To open Cypress test UI:

```bash
yarn run cy:open
```

Then choose `E2E testing`, then `Chrome` browser ideally and click on `Start E2E testing in Chrome` button.
Then select the test you want to run in the user interface in Chrome.
