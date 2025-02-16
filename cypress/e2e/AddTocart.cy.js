import {HomePage} from "../pages/HomePage";
const homepageObj = new HomePage()
import testdata from "../fixtures/testdata.json"

describe('test automation', () => {
    before(()=>{
        cy.login(testdata.login.username,testdata.login.password)
    })

    it('Add to cart',function (){
        homepageObj.searchProduct(testdata.product.productName)
        homepageObj.addToCart()
        homepageObj.verifySuccessMessage().should('contain',testdata.message.sucessMessage)
    })

});