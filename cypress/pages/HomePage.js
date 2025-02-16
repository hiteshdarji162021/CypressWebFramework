export class HomePage{
    weblocators={
        searchInput:"input[name='search']",
        clickSearch:".btn.btn-default1",
        product:"img[title='MacBook']",
        addToCart:"Add to Cart",
        successMessage:".alert-success"
    }
    searchProduct(productName){
        cy.get(this.weblocators.searchInput).type(productName)
        cy.get(this.weblocators.clickSearch).click()
    }
    addToCart(){
        cy.contains(this.weblocators.addToCart).click()
    }
    verifySuccessMessage() {
        return cy.get(this.weblocators.successMessage)
    }
}