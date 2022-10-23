import {Request} from "../../fixtures/customer-Selectors.js";
const access  = require("./validLogin.cy.js");

describe("login", function () {
    beforeEach(function () {
        cy.visit('https://sharply-test.sharply.africa/auth/login')
        access.validLogin();
    });

    it("Request pickup - As a sender ", function () {
        cy.get().click()
        
    })

    it("Request pickup - As a receiver ", function () {
        cy.get(Homepage.requestPickup).click()
        
    })

    it("Request pickup - As a third party ", function () {
        cy.get(Homepage.requestPickup).click()
        
    })








})