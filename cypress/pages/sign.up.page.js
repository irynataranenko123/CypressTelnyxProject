import MainPage from "./main.page"

export default new class SignUpPage extends MainPage{

    constructor() {

        super(),
        this.inputWorkEmail = () => {return cy.get('#email')},
        this.inputFullName = () => {return cy.get('#full_name')},
        this.inputPassword = () => {return cy.get('#password')},
        this.agreeCheckbox = () => {return cy.get('.sc-26f7330-5 > .sc-e117dd75-0')},
        this.submitBtn = () => {return cy.get('[type="submit"]')},
        this.errorMessage = () => {return cy.get('#signup-form_error')}
        this.siteLogo = () => {return cy.get('[href="/"]')},
        this.recaptchaError= () => {return cy.get('[data-top="1099.6796875"]')}

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
        cy.fixture('const').then((data) => {
            this.errorMessage().then(($span)=> {
                if ($span.text() == data.errorInvalidSignUp){ 
                    this.errorMessage().should('be.visible')
                    .and('contain', data.errorInvalidSignUp)
                } else if ($span.attr('text') != data.errorInvalidSignUp){
                    this.errorMessage().should('be.visible')
                    .and('contain', data.errorRecaptchaSignUp)
                }  
            })
        })   
    }

    checkNotBusinessEmailError(){
        cy.fixture('const').then((data) => {
            this.errorMessage().then(($span)=> {
                if ($span.text() == data.errorNotBusinessEmail){ 
                    this.errorMessage().should('be.visible')
                    .and('contain', data.errorNotBusinessEmail)
                } else if ($span.attr('text') != data.errorNotBusinessEmail){
                    this.errorMessage().should('be.visible')
                    .and('contain', data.errorRecaptchaSignUp)
                }
            })
        }) 
    }
    checkNotBusinessEmailError(){
        cy.fixture('const').then((data) => {
            this.errorMessage().then(($span)=> {
                if ($span.text() == data.errorNotBusinessEmail){ 
                    this.errorMessage().should('be.visible')
                    .and('contain', data.errorNotBusinessEmail)
                } else {
                    this.errorMessage().should('be.visible')
                    .and('contain', data.errorRecaptchaSignUp)
                }
            })
        }) 
    }

    clickSiteLogo () {
        this.siteLogo().click()
    }
}
