import mainPage from '../../pages/main.page'

describe('Menu', () => {

    it("A8 - Check that main page contains categories such 'Products', 'Solutions', 'Network', 'Resoucres', 'Company' and 'Pricing'", () => {
        cy.visit('https://telnyx.com/')
        cy.acceptCookies()
        mainPage.openMenu()
        mainPage.checkingMenuElementsIsVisible ()
    })
})