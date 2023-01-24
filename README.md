# Project description
## A test framework to test different functionality for https://telnyx.com/ was written in cypress.
```
In this project:
1. Automated test-cases cover different site functionalities
2. The project contains Page Object Model POM
3. The launch of all tests can be viewed in the cypress launcher
4. All test results reports are automatically generated by Cypress
5. Pipeline is launched
6. Implemented automatic deployment of reports on GitHub pages
```
## Technologies
```
- Node.js: 18.12.1
- cypress: 12.0.2
```

## Setup 
To run this project, install it locally:
```
$ git clone https://github.com/PepesSpi123/CypressTelnyxProject
$ npm install
```
## Running test:
```
- Running all tests: npx cypress run
- Running a single test file: npx cypress run --spec "cypress/e2e/tests/goToMain.cy.js"
```
## Opening the App: 
```
- Using npx: npx cypress open
- The long way with the full path: ./node_modules/.bin/cypress open

On opening Cypress, your testing journey begins with the Launchpad. You should choose E2E Testing. Then you need to choose a Browser.
```
## Opening the tests:
```
Click on the name of the test file and watch Cypress open your browser.
```
## Reports:
```
When you run tests, Cypress automatically generates a report to a folder 'videos'. 
If the test fails, the screenshots will be uploaded to the folder 'screenshots'.
```
