import signUpPage  from "../../pages/sign.up.page";

describe('Sign Up', () => {
    beforeEach(() => {
        cy.visit('https://telnyx.com/')
        cy.acceptCookies()
    })

    it('A1 - Checking that it is not possible to register a new user with invalid email', () => {
        
        signUpPage.clickSignUp()
        cy.fixture('const').then((data) => {
            signUpPage.fillWorkEmail(data.invalidEmail)
            signUpPage.fillFullName(data.fullName)
            signUpPage.fillPassword(data.password)
        })
        signUpPage.checkAgreeCheckbox()
        signUpPage.submitSignUp()
        signUpPage.checkInvalidDataError()
        //cy.contains('That email and password combination is not valid, or your browser could not be authenticated via recaptcha. Please try again.').should('be.visible')
    })

    it('A2 - Checking that it is not possible to register a new user with valid but not business email', () => {
        signUpPage.clickSignUp()
        cy.fixture('const').then((data) => {
            signUpPage.fillWorkEmail(data.notBusinessEmai)
            signUpPage.fillFullName(data.fullName)
            signUpPage.fillPassword(data.password)
        })
        signUpPage.checkAgreeCheckbox()
        signUpPage.submitSignUp()
        signUpPage.checkNotBusinessEmailError()
        //cy.contains('That email and password combination is not valid, or your browser could not be authenticated via recaptcha. Please try again.').should('be.visible')
    })

})
