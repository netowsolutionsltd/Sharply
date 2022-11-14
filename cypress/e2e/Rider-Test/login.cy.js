import {login,Homepage} from "../../fixtures/rider-Selector.js";
// const access  = require("./ValidLogin.cy.js");
 
describe("login", function () {
    beforeEach(function () {
        cy.visit('https://rider-staging.sharply.africa/auth/login')
 
    });

    it("LOGIN - Invalid Login", function () {
        cy.get(login.phoneNumfield).type('836475')
        cy.get(login.passwordInput).type('password')
        cy.get(login.logInButton).click()
    })

    it("LOGIN - Valid Login", function () {
        cy.get(login.phoneNumfield).type(login.phoneNumber)
        cy.get(login.passwordInput).type(login.passwordInput)
        cy.get(login.logInButton).click({force:true})

    })

   









})