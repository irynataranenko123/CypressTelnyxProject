import MainPage from '../../pages/main.page'

describe('Menu', () => {

    const mainPage = new MainPage

    it("A8 - Checking that when you open the menu tab, categories 'Products', 'Solutions', 'Network', 'Resoucres', 'Company' and 'Pricing' are visible", () => {
        cy.visit('https://telnyx.com/')
        cy.acceptCookies()
        mainPage.openMenu()
        mainPage.checkMenuElementsIsVisible ()
    })
})