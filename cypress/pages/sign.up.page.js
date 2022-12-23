import MainPage from "./main.page"

export default new class SignUpPage extends MainPage{

    constructor() {

        super(),
        this.inputWorkEmail = () => {return cy.get('#email')},
        this.inputFullName = () => {return cy.get('#full_name')},
        this.inputPassword = () => {return cy.get('#password')},
        this.agreeCheckbox = () => {return cy.get('.sc-26f7330-5 > .sc-e117dd75-0')},
        this.submitBtn = () => {return cy.get('[type="submit"]')},
        this.errorMessage = () => {return cy.get('.sc-570b157-1')}
        this.siteLogo = () => {return cy.get('[href="/"]')}
       
    }
    

    fillWorkEmail(email) {
        this.inputWorkEmail().type(email).should('have.value', email)
    }

    fillFullName(fullName) {
        this.inputFullName().type(fullName).should('have.value', fullName)
    }
    
    fillPassword(password) {
        this.inputPassword().type(password).should('have.value', password)
    }

    checkAgreeCheckbox(){
        this.agreeCheckbox().click()
    }

    submitSignUp(){
        this.submitBtn().click()
    }

    checkInvalidDataError(){
        this.errorMessage().should('be.visible')
        .and('contain', 'One or more fields are not valid')
    }

    checkNotBusinessEmailError(){
        this.errorMessage().should('be.visible')
        .and('contain', 'We were unable to create a new account with this email')
    }

    clickSiteLogo () {
        this.siteLogo().click()
    }
}
