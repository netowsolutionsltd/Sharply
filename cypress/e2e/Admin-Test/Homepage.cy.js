import {homepage} from "../../fixtures/admin-Selectors.js";
const access  = require("./validlogin.cy.js");

describe("login", function () {
    beforeEach(function () {
        cy.visit('/')
        access.validlogin();
    });

    it("HOMEPAGE - Navigate between Active, Complete and total orders card ", function () {
        cy.get(homepage.completedOrders).click()
        cy.get(homepage.totalOrders).click()
        cy.get(homepage.activeOrders).click()
    })

    it("HOMEPAGE- View homepage cards", function () {
        cy.get(homepage.viewOrders).click()
        cy.wait(3000)
        cy.get(homepage.backBtn).click()
        cy.get(homepage.viewRiders).click()
        cy.wait(3000)
        cy.get(homepage.backBtn).click()
        cy.get(homepage.viewCustomer).click()
        cy.wait(3000)
        cy.get(homepage.backBtn).click()
        cy.get(homepage.viewAnalytics).click()
        cy.wait(3000)
        cy.get(homepage.backBtn).click()
        cy.get(homepage.viewSettings).click()
        cy.wait(3000)
        cy.get(homepage.backBtn).click()
    })
 

})