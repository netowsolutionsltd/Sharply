import {login} from "../../fixtures/admin-Selectors.js";

export const validlogin = () => {
                cy.get(login.emailInput).type(login.emailText)
                cy.get(login.passwordInput).type(login.passwordText)
                cy.get(login.logInButton).click()
            }
        
         
         

        
