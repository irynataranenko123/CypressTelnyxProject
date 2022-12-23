import LoginPage from "./login.page"

export default new class PasswordRecoveryPage extends LoginPage{

    constructor () {

        super(),
        this.inputEmail = () => {return cy.get('[name="email"]')},
        this.resetPasswordBtn = () => {return cy.get('[type="submit"]')},
        this.successMessage = () => {return cy.get('.Text-dgspRF > div')}
    }

    fillEmail(email){
        this.inputEmail().type(email).should('have.value', email)
    }
    clickResetPasswordBtn(){
        this.resetPasswordBtn().click()
    }
    checkSuccessMessage (){
        this.successMessage().should('be.visible')
        .and('contain', 'We have accepted your password reset request')
    } 
}

