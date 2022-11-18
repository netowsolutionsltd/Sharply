import {Login} from "../../cypress/fixtures/rider-Selectors.js";

export const ValidLogin = () => {
        cy.get(Login.phoneNumfield).type('')
        cy.get(Login.passwordInput).type('password')
        cy.get(Login.logInButton).click()
}