// import { it } from "node:test";
// import { it } from "node:test";
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
    it("Create Order - Check Existing orders", function () {
        cy.get(Order.createOrder).click()
        cy.get(Order.searchBar).type(Order.searchWord)
        cy.get(Order.checkExistingorder).click().wait(3000)
        // cy.get(Order.markrequestBtn).click()
        cy.get(Order.backBtn).click().wait(3000)
        cy.get(Order.filterBtn).click()
        cy.get(Order.orderStatus).click()
        cy.get(Order.accepted).click()
        cy.get(Order.completed).click()
        cy.get(Order.declined).click()
        cy.get(Order.pending).click()
        cy.get(Order.pickedUp).click()
        cy.get(Order.cancelled).click()
        cy.get(Order.orderDate).click().wait(3000)
        cy.get(Order.dayPicker).click().wait(3000)
        cy.get(Order.dayPicker2).click({force:true})
        // cy.get(Order.updateBtn).click()
        // cy.get(Order.clearBtn).click()

    })
        


    })

