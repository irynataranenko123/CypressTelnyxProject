import mainPage from '../../pages/main.page'
import loginPage from '../../pages/login.page'
import * as testData from '../../src/utils/const'

describe('Log In', () => {
    beforeEach(() => {
        cy.visit('https://telnyx.com/')
        cy.acceptCookies()
    })
    it('A3 - Check the sign in of an existing user with not confirmed email', () => {
      

        mainPage.clickLogin()
        loginPage.fillBusinessEmail(testData.validEmail)
        loginPage.fillPassword(testData.password)
        loginPage.submitLogin()
        loginPage.checkingNotConfirmedEmailError()
    })
    it('A4 - Check the sign in of an not existing user', () => {
 
        mainPage.clickLogin()
        loginPage.fillBusinessEmail(testData.email)
        loginPage.fillPassword(testData.password)
        loginPage.submitLogin()
        loginPage.checkingInvalidDataError()
    })
})