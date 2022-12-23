import MainPage from "./main.page"

export default class LoginPage extends MainPage {

    constructor() {

        super (),
        this.inputBusinessEmail = () => {return cy.get('[name="email"]')},
        this.inputPassword = () => {return cy.get('[name="password"]')}, 
        this.submitBtn = () => {return cy.get('.Button__StyledDefaultButton-sc-44gl5i-0')},
        this.errorMessage = () => {return cy.get('.Message__MessageCopy-sc-1lbs5ge-2')},
        this.forgotPasswordBtn = () => {return cy.get('[href="/#/login/password-reset"]')}
    }

    fillBusinessEmail(email) {
        this.inputBusinessEmail().first().type(email).should('have.value', email)
    }
    fillPassword(password) {
        this.inputPassword().type(password).should('have.value', password)
    }
    submitLogin(){
        this.submitBtn().click()
    }
    checkNotConfirmedEmailError(){
        this.errorMessage().should('be.visible')
        .and('contain', 'You must confirm your email before you can sign in')
    }
    checkInvalidDataError(){
        this.errorMessage().should('be.visible')
        .and('contain', 'That email and password combination is not valid')
    } 
    clickForgotPasswordBtn() {
        this.forgotPasswordBtn().click()
        cy.url().should('include','/password-reset')
    }
}
