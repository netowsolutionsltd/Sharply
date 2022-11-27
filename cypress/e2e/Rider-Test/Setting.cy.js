import {setting} from "../../fixtures/rider-Selector.js";
 const access  = require("./ValidLogin.cy.js");
 
describe("login", function () {
    beforeEach(function () {
        cy.visit('https://rider-staging.sharply.africa/auth/login') 
 
    });
    it("Personal Details ", function () {
        cy.get().type()
        cy.get().type()
        cy.get().click()
    })

    it("Change password ", function () {
        cy.get().type()
        cy.get().type()
        cy.get().click()
    })
    it("Personal logout ", function () {
        cy.get().type()
        cy.get().type()
        cy.get().click()
    })







})