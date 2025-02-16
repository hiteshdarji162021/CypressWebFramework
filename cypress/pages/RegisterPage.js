export  class RegisterPage {
    weblocators = {
        firstname: '#input-firstname',
        lastname:'#input-lastname',
        email:'#input-email',
        telephone:'#input-telephone',
        password:'#input-password',
        confirmPassword:'#input-confirm',
        policyCheckbox:'input[type="checkbox"]',
        continue:'.btn.btn-primary'
    }

    openURL(){
        cy.visit(Cypress.env('URL'))
    }
    enterFirstName(fName){
            cy.get(this.weblocators.firstname).type(fName)
    }
    enterLastName(lName){
        cy.get(this.weblocators.lastname).type(lName)
    }
    enterEmail(email){
        cy.get(this.weblocators.email).type(email)
    }
    enterTelephone(telephone){
        cy.get(this.weblocators.telephone).type(telephone)
    }
    enterPassword(password){
        cy.get(this.weblocators.password).type(password)
        cy.get(this.weblocators.confirmPassword).type(password)
    }
    selectCheckbox() {
        cy.get(this.weblocators.policyCheckbox).check()
    }
    clickOnContinue(){
        cy.get(this.weblocators.continue).click()
    }
}