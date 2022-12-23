import MainPage from "../../pages/main.page"

describe('Go to linkedIn', () => {

    const mainPage = new MainPage

    it('A10 - Сhecking the functionality of the "LinkedIn" reference on the main page', () => {
        cy.visit('https://telnyx.com/')
        cy.acceptCookies()
        mainPage.clickLinkedInBtn()
        cy.url().should('include', 'linkedin')
    })
    })

