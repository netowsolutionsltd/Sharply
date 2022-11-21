import {Order} from "../../fixtures/rider-Selector.js";
 const access  = require("./ValidLogin.cy.js");
 
describe("login", function () {
    beforeEach(function () {
        cy.visit('https://rider-staging.sharply.africa/auth/login') 
        access.ValidLogin();
 
    });

    it("Dashboard Cards  ", function () {
        cy.get(Order.completedOrders).click()
        cy.get(Order.activeOrders).click()

    })
    
    it("View Orders", function () {
        cy.get(Order.viewOrder).click().wait(3000)
        cy.get(Order.backBtn).click()

    })













})