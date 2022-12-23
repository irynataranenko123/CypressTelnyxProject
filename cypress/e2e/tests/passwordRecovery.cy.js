import passwordRecoveryPage from '../../pages/password.recovery.page'

describe('Password Recovery', () => {

    it('A5 - Checking the ability to recover password', () => {
        cy.visit('https://telnyx.com/')
        cy.acceptCookies()
        passwordRecoveryPage.clickLogin()
        passwordRecoveryPage.clickForgotPasswordBtn()
        cy.fixture('const').then((data) => {
            passwordRecoveryPage.fillEmail(data.validEmail)
        })
        passwordRecoveryPage.clickResetPasswordBtn()
        passwordRecoveryPage.checkSuccessMessage()
    })
})