import {homepage,Customer} from "../../fixtures/admin-Selectors.js";
const access  = require("./validlogin.cy.js");

describe("ORDERS", function () {
    beforeEach(function () {
        cy.visit('/')
        access.validlogin();
        
    });

    it("Customer - Search for customer ", function () {
        cy.get(homepage.viewCustomer).click()
        cy.wait(3000)
        cy.get(Customer.searchField).type(Customer.text)
        cy.wait(3000)

    })
    it("Customer - Search for view customer details", function () {
        cy.get(homepage.viewCustomer).click()
        cy.wait(3000)
        cy.get(Customer.searchField).type(Customer.text)
        cy.get(Customer.orderNumber).click()
        cy.wait(3000)
    })

})