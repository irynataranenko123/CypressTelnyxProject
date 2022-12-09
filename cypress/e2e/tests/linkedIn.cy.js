import mainPage from '../../pages/main.page'

describe('Go to main page', () => {
    it('A10 - Check that the site is linked with LinkedIn', () => {
        cy.visit('https://telnyx.com/')
        cy.acceptCookies()
        mainPage.clickLinkedInBtn()
        cy.url().should('include', 'linkedin')
    })
    })

