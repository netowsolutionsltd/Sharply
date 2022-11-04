import {Login} from "../../fixtures/customer-Selectors.js";

export const validLogin = () => {
        cy.get(Login.phoneNumfield).type('7061549226')
        cy.get(Login.passwordInput).type('password')
        cy.get(Login.logInButton).click()
}
            
        
         
         
