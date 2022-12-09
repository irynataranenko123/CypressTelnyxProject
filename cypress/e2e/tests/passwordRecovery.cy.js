import mainPage from '../../pages/main.page'
import loginPage from '../../pages/login.page'
import passwordRecoveryPage from '../../pages/password.recovery.page'
import * as testData from '../../src/utils/const'

describe('Password Recovery', () => {

    it('A5 - Check the ability to recover password', () => {
        cy.visit('https://telnyx.com/')
        cy.acceptCookies()
        mainPage.clickLogin()
        loginPage.clickForgotPasswordBtn()
        passwordRecoveryPage.fillEmail(testData.validEmail)
        passwordRecoveryPage.clickResetPasswordBtn()
    })
})