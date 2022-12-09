import mainPage from "../../pages/main.page";
import signUpPage from "../../pages/sign.up.page"

describe('Go to main page', () => {

    it('A9 - Check the ability to return to the main page by clicking on site logo', () => {
        cy.visit('https://telnyx.com/')
        cy.acceptCookies()
        mainPage.clickSignUp()
        signUpPage.clickSiteLogo()
        cy.url().should('be.equal', 'https://telnyx.com/')
        
    })
})