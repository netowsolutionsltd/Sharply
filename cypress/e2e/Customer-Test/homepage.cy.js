import {Homepage} from "../../fixtures/customer-Selectors.js";
const access  = require("./validLogin.cy.js");

describe("login", function () {
    beforeEach(function () {
        cy.visit('https://sharply-test.sharply.africa/auth/login')
        access.validLogin();
    });

    it("HOMEPAGE- View homepage cards", function () {
        cy.get(Homepage.requestPickup).click()
        cy.wait(3000)
        cy.get(Homepage.backBtn).click()
        cy.get(Homepage.trackOrder).click()
        cy.wait(3000)
        cy.get(Homepage.backBtn).click()
        cy.get(Homepage.myOrders).click()
        cy.wait(3000)
        cy.get(Homepage.backBtn).click()
        cy.get(Homepage.myAccount).click()
        cy.wait(3000)
        cy.get(Homepage.backBtn).click()
    })














})