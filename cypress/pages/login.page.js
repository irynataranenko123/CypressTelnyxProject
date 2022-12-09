class LoginPage {

    elements ={
        inputBusinessEmail : () => cy.get('[name="email"]'),
        inputPassword : () => cy.get('[name="password"]'), 
        submitBtn : () => cy.get('.Button__StyledDefaultButton-sc-44gl5i-0'),
        errorNotConfirmedEmail : () => cy.contains('You must confirm your email before you can sign in'),
        errorInvalidData : () => cy.contains('That email and password combination is not valid'),
        forgotPasswordBtn : () => cy.get('[href="/#/login/password-reset"]')
    }

    fillBusinessEmail(email) {
        this.elements.inputBusinessEmail().first().type(email).should('have.value', email)
    }
    fillPassword(password) {
        this.elements.inputPassword().type(password).should('have.value', password)
    }
    submitLogin(){
        this.elements.submitBtn().click()
    }
    checkingNotConfirmedEmailError(){
        this.elements.errorNotConfirmedEmail().should('be.visible')
    }
    checkingInvalidDataError(){
        this.elements.errorInvalidData().should('be.visible')
    } 
    clickForgotPasswordBtn() {
        this.elements.forgotPasswordBtn().click()
        cy.url().should('include','/password-reset')
    }
}
module.exports = new LoginPage ()