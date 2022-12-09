class MainPage {



        elements ={
  
            signUpBtn : () => cy.contains('Sign up'),
            loginBtn :() => cy.get('.sc-ee0ec023-2 > :nth-child(6)'),
            supportCenterBtn : () => cy.get('.sc-ee0ec023-2 > :nth-child(5)'),
            inputEmail : () => cy.get('[type="email"]'),
            menuBtn : () => cy.get('.sc-14c941d7-8'),
            productsList : () => cy.get('.sc-6ef4e600-19 > :nth-child(1) > .sc-6ef4e600-12'),
            solutionsList : () => cy.get('.sc-6ef4e600-19 > :nth-child(2) > .sc-6ef4e600-12'),
            networkList : () => cy.get('.sc-f97529d6-0 > .sc-6ef4e600-12'),
            resoursesList : () => cy.get('.sc-6ef4e600-19 > :nth-child(4) > .sc-6ef4e600-12'),
            companyList : () => cy.get('.sc-6ef4e600-19 > :nth-child(5) > .sc-6ef4e600-12'),
            pricingList : () => cy.get('.sc-6ef4e600-19 > :nth-child(6) > .sc-6ef4e600-12'),
            linkedInBtn : () => cy.get('[href="https://www.linkedin.com/company/telnyx/"]')
        }


    clickSignUp(){
        this.elements.signUpBtn().click()
        cy.url().should('include', '/sign-up')
    }
    clickLogin(){
        this.elements.loginBtn().click()
        cy.url().should('include', '/login/')
    }
    clickSupportCenterBtn(){
        this.elements.supportCenterBtn().click()
        cy.url().should('include', '/support')
    }
    fillEmail(email){
        this.elements.inputEmail().type(email).should('have.value', email).type('{enter}')
    }
    openMenu(){
        this.elements.menuBtn().click()
    }
    checkingMenuElementsIsVisible() {
        this.elements.pricingList().should('be.visible')
        this.elements.solutionsList().should('be.visible')
        this.elements.networkList().should('be.visible')
        this.elements.resoursesList().should('be.visible')
        this.elements.companyList().should('be.visible')
        this.elements.pricingList().should('be.visible')
    }
    clickLinkedInBtn(){
        this.elements.linkedInBtn().scrollIntoView()
        this.elements.linkedInBtn().should($linkedInBtn => {
            $linkedInBtn.attr('target', '_self')
          }).click()
        //this.elements.linkedInBtn().click()
    }
}
module.exports = new MainPage ()