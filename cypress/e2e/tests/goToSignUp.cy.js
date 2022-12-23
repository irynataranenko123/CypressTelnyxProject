import MainPage from "../../pages/main.page"

describe('Go to Sign Up', () => {
    
    const mainPage = new MainPage
    
    it("A7 -  Checking the ability to go to the sign-up page with the central ‘Email’ field", () => {

        cy.visit('https://telnyx.com/')
        cy.acceptCookies() 
        cy.fixture('const').then((data) => {
            mainPage.fillEmail(data.validEmail)
        })
        mainPage.clickTryForFreeBtn()
        cy.url().should('include', '/sign-up')
    })

})