import LoginPage from "../../pages/login.page"

describe('Log In', () => {

    const loginPage = new LoginPage

    beforeEach(() => {
        cy.visit('https://telnyx.com/')
        cy.acceptCookies()
    })    

    it('A3 - Checking the sign in of an existing user with not confirmed email',  () => {
        loginPage.clickLogin()
        cy.fixture('const').then((data) => {
            loginPage.fillBusinessEmail(data.validEmail)
            loginPage.fillPassword(data.password)
        })
        loginPage.submitLogin()
        loginPage.checkNotConfirmedEmailError()
    })

    it('A4 - Checking the sign in of an not existing user', () => {
        loginPage.clickLogin()
        cy.fixture('const').then((data) => {
            loginPage.fillBusinessEmail(data.invalidEmail)
            loginPage.fillPassword(data.password)
        })
        loginPage.submitLogin()
        loginPage.checkInvalidDataError()

    })
})
