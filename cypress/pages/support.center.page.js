import MainPage from "./main.page"

export default new class SupportCenter extends MainPage{

    constructor() {
        super(),
        this.searchField = () => {return cy.get('[name="q"]')},
        this.article = () => {return cy.get('[href="/en/articles/1130637-what-is-telnyx"]')},
        this.articleTitle= () => {return cy.get('.t__h1').contains('What is')}

    }

    fillSearchField(text){
        this.searchField().type(text).should('have.value', text).type('{enter}')
    }
    openArticle (){
        this.article().click()
    }
    checkArticleTitle(text) {
        this.articleTitle().should('contain', text)
    }
}
