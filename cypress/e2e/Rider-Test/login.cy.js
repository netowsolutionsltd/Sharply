import {login,Homepage} from "../../fixtures/rider-Selectors.js";
const access  = require("./ValidLogin.cy.js");
 
describe("login", function () {
    beforeEach(function () {
        cy.visit('https://rider-staging.sharply.africa/auth/login')
 
    });

    it("LOGIN - Invalid Login", function () {
        cy.get(login.phoneNumfield).type('')
        cy.get(login.passwordInput).type('password')
        cy.get(login.logInButton).click()
    })

    it("LOGIN - Valid Login", function () {
        cy.get(login.phoneNumfield).type('')
        cy.get(login.passwordInput).type('password')
        cy.get(login.logInButton).click()
    })










})