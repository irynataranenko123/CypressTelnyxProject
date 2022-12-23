import supportCenterPage from "../../pages/support.center.page";


describe('Use a support Center', () => {
    beforeEach(() => {
        cy.visit('https://telnyx.com/')
        cy.acceptCookies()

    })

    it('A6 - Checking the ability to use a support center', () => {
        
        supportCenterPage.clickSupportCenterBtn()
        cy.fixture('const').then((data) => {
            supportCenterPage.fillSearchField(data.text)
            supportCenterPage.openArticle()
            supportCenterPage.checkArticleTitle(data.text)
        })
    })
})
