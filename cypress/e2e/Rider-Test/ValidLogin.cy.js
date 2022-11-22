import {login} from "../../fixtures/rider-Selector.js";

export const ValidLogin = () => {
        cy.get(login.phoneNumfield).type(login.phoneNumber)
        cy.get(login.passwordInput).type(login.password)
        cy.get(login.logInButton).click()

}