

class SignUpPage{


    elements ={
        inputWorkEmail : () => cy.get('#email'),
        inputFullName : () => cy.get('#full_name'),
        inputPassword : () => cy.get('#password'),
        agreeCheckbox : () => cy.get('.sc-26f7330-5 > .sc-e117dd75-0'),
        agreeTermsError : () => cy.contains('Please accept the terms and conditions'),
        submitBtn : () => cy.get('[type="submit"]'),
        errorInvalidData : () => cy.contains('One or more fields are not valid'),
        errorNotBusinessEmail : () => cy.contains('We were unable to create a new account with this email'),
        successMessage : () => cy.contains("We've sent you an email to activate your account"),
        siteLogo : () => cy.get('[href="/"]')
    }
    

    fillWorkEmail(email) {
        this.elements.inputWorkEmail().type(email).should('have.value', email)
    }

    fillFullName(fullName) {
        this.elements.inputFullName().type(fullName).should('have.value', fullName)
    }
    
    fillPassword(password) {
        this.elements.inputPassword().type(password).should('have.value', password)
    }
    checkAgreeCheckbox(){
        this.elements.agreeCheckbox().click()
    }

    submitSignUp(){
        this.elements.submitBtn().click()

    }

    checkingInvalidDataError(){
        this.elements.errorInvalidData().should('be.visible')
    }

    checkingNotBusinessEmailError(){
        this.elements.errorNotBusinessEmail().should('be.visible')
    }
    checkingSuccessMessage() {
        this.elements.successMessage().should('be.visible')
    }
    clickSiteLogo () {
        this.elements.siteLogo().click()
    }
}
module.exports = new SignUpPage ()