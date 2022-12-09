import mainPage from "../../pages/main.page";
import signUpPage  from "../../pages/sign.up.page";
import * as testData from '../../src/utils/const'

describe('Sign Up', () => {
    beforeEach(() => {
        cy.visit('https://telnyx.com/')
        cy.acceptCookies()
    })
    xit('A1 - Checking that it is not possible to register a new user with invalid email', () => {
        
        mainPage.clickSignUp()
        signUpPage.fillWorkEmail(testData.invalidEmail)
        signUpPage.fillFullName(testData.fullName)
        signUpPage.fillPassword(testData.password)
        signUpPage.checkAgreeCheckbox()
        signUpPage.submitSignUp()
        cy.wait(5000)
        signUpPage.checkingInvalidDataError()
    })

    xit('A2 - Checking that it is not possible to register a new user with valid but not business email', () => {
        mainPage.clickSignUp()
        signUpPage.fillWorkEmail(testData.notBusinessEmail)
        signUpPage.fillFullName(testData.fullName)
        signUpPage.fillPassword(testData.password)
        signUpPage.checkAgreeCheckbox()
        signUpPage.submitSignUp()
        cy.wait(5000)
        signUpPage.checkingNotBusinessEmailError()
    })
    it('A7 - Check the registration of a new user with central "Email" field ', () => {
        mainPage.fillEmail(testData.email)
        signUpPage.fillFullName(testData.fullName)
        signUpPage.fillPassword(testData.password)
        signUpPage.checkAgreeCheckbox()
        signUpPage.submitSignUp()
        signUpPage.submitSignUp()
        cy.wait(10000)
        cy.url().should('include', '/verify-email/f')
        signUpPage.checkingSuccessMessage()
     

    })
})
