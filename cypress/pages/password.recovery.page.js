class PasswordRecoveryPage {

    elements ={
        inputEmail : () => cy.get('[name="email"]'),
        resetPasswordBtn : () => cy.get('[type="submit"]'),
        successMessage : () => cy.contains('We have accepted your password reset request')
    }

    fillEmail(email){
        this.elements.inputEmail().type(email).should('have.value', email)
    }
    clickResetPasswordBtn(){
        this.elements.resetPasswordBtn().click()
    }
    checkingSuccessMessage (){
        this.elements.successMessage.should('be.visible')
    } 
}

module.exports = new PasswordRecoveryPage ()