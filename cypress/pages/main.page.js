export default class MainPage {

        constructor (){ 

            this.signUpBtn = () => {return cy.contains('Sign up')},
            this.loginBtn =() => {return cy.get('.sc-ee0ec023-2 > :nth-child(6)')},
            this.supportCenterBtn = () => {return cy.get('.sc-ee0ec023-2 > :nth-child(5)')},
            this.inputEmail = () => {return cy.get('[type="email"]')},
            this.menuBtn = () => {return cy.get('.sc-14c941d7-8')},
            this.productsList = () => {return cy.get('.sc-6ef4e600-19 > :nth-child(1) > .sc-6ef4e600-12')},
            this.solutionsList = () => {return cy.get('.sc-6ef4e600-19 > :nth-child(2) > .sc-6ef4e600-12')},
            this.networkList = () => {return cy.get('.sc-f97529d6-0 > .sc-6ef4e600-12')},
            this.resoursesList = () => {return cy.get('.sc-6ef4e600-19 > :nth-child(4) > .sc-6ef4e600-12')},
            this.companyList = () => {return cy.get('.sc-6ef4e600-19 > :nth-child(5) > .sc-6ef4e600-12')},
            this.pricingList = () => {return cy.get('.sc-6ef4e600-19 > :nth-child(6) > .sc-6ef4e600-12')},
            this.linkedInBtn = () => {return cy.get('[href="https://www.linkedin.com/company/telnyx/"]')},
            this.tryForFreeBtn = () => {return cy.get('.sc-5d3a275a-2')}
        }


    clickSignUp(){
        this.signUpBtn().click()
        cy.url().should('include', '/sign-up')
    }
    clickLogin(){
        this.loginBtn().click()
        cy.url().should('include', '/login/')
    }
    clickSupportCenterBtn(){
        this.supportCenterBtn().click()
        cy.url().should('include', '/support')
    }
    fillEmail(email){
        this.inputEmail().type(email).should('have.value', email)
    }
    clickTryForFreeBtn(){
        this.tryForFreeBtn().click()
    }
    openMenu(){
        this.menuBtn().click()
    }
    checkMenuElementsIsVisible() {
        this.pricingList().should('be.visible')
        this.solutionsList().should('be.visible')
        this.networkList().should('be.visible')
        this.resoursesList().should('be.visible')
        this.companyList().should('be.visible')
        this.pricingList().should('be.visible')
    }
    clickLinkedInBtn(){
        this.linkedInBtn().scrollIntoView()
        this.linkedInBtn().should($linkedInBtn => {
            $linkedInBtn.attr('target', '_self')
          }).click()
    }
}
