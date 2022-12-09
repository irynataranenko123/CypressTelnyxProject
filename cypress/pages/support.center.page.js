

class SupportCenter {

    elements ={

        searchField : () => cy.get('[name="q"]'),
        article : () => cy.get('[href="/en/articles/1130637-what-is-telnyx"]'),
        articleTitle: () => cy.get('.t__h1').contains('What is')

    }

    fillSearchField(text){
        this.elements.searchField().type(text).should('have.value', text).type('{enter}')
    }
    openArticle (){
        this.elements.article().click()
    }
    chickingArticleTitle(text) {
        this.elements.articleTitle().should('contain', text)
    }
}
module.exports = new SupportCenter()