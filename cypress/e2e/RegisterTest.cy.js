import {RegisterPage} from "../pages/RegisterPage"
const  registerObj = new RegisterPage()
import registerData from "../fixtures/RegistrationTestData.json"

describe('test automation', () => {
    it('registration flow ', () => {
        registerObj.openURL()
        registerObj.enterFirstName(registerData.firstName)
        registerObj.enterLastName(registerData.lastName)
        registerObj.enterEmail(registerData.email)
        registerObj.enterTelephone(registerData.telephone)
        registerObj.enterPassword(registerData.password)
        registerObj.selectCheckbox()
        registerObj.clickOnContinue()
    });
});