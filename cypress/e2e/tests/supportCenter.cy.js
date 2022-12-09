import mainPage from "../../pages/main.page";
import supportCenterPage from "../../pages/support.center.page";
import * as testData from '../../src/utils/const'

describe('Use a support Center', () => {
    beforeEach(() => {
        cy.visit('https://telnyx.com/')
        cy.acceptCookies()
    })
    it('A6 - Check the ability to use a support center', () => {
        
        mainPage.clickSupportCenterBtn()
        supportCenterPage.fillSearchField(testData.text)
        supportCenterPage.openArticle()
        supportCenterPage.chickingArticleTitle(testData.text)

        
    })
})
