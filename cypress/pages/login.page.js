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
        cy.fixture('const').then((data) => {
            this.errorMessage().then(($span)=> {
                if ($span.text() == data.errorConfirmEmail){ 
                    cy.log($span.text())
                    this.errorMessage().should('be.visible')
                    .and('contain', data.errorConfirmEmail)
                } else {
                    cy.log($span.text())
                    this.errorMessage().should('be.visible')
                    .and('contain', data.errorInvalidLogin)
                }
            })
        })
        
        /*cy.fixture('const').then((data) => {
            this.errorMessage().should('be.visible')
            .and('contain', data.errorConfirmEmail)
            //.and('contain', data.errorRecaptcha)
        })*/
    }
    checkInvalidDataError(){
        cy.fixture('const').then((data) => {
            this.errorMessage().should('be.visible')
            .and('contain', data.errorInvalidLogin)
        })
    } 
    clickForgotPasswordBtn() {
        this.forgotPasswordBtn().click()
        cy.url().should('include','/password-reset')
    }
}
