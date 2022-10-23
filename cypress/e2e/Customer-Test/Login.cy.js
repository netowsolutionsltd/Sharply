import {Login,Homepage} from "../../fixtures/customer-Selectors.js";
const access  = require("./validLogin.cy.js");
 
describe("login", function () {
    beforeEach(function () {
        cy.visit('https://sharply-test.sharply.africa/auth/login')
 
    });
 
    it("LOGIN - Invalid Login", function () {
        cy.get(Login.phoneNumfield).type('7061549123')
        cy.get(Login.passwordInput).type('password')
        cy.get(Login.logInButton).click()
    })

    it("LOGIN - Valid Login", function () {
        cy.get(Login.phoneNumfield).type('7061549226')
        cy.get(Login.passwordInput).type('password')
        cy.get(Login.logInButton).click()
    })

    it("LOGOUT - should be able to logout", function () {
        access.validLogin();
        cy.get(Homepage.myAccount).click()
        cy.get(Homepage.logOut).click()
    })

})