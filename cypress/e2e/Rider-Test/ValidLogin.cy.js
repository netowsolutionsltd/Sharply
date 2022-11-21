import {login} from "../../fixtures/rider-Selector.js";

export const ValidLogin = () => {
        cy.get(login.phoneNumfield).type('07061549226')
        cy.get(login.passwordInput).type('password')
        cy.get(login.logInButton).click()
}