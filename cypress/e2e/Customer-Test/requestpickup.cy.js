import {requestpickup} from "../../fixtures/customer-Selectors.js";
const access  = require("./validLogin.cy.js");

describe("requestpickup", function () {
    before(function () {
        cy.visit('https://sharply-test.sharply.africa/auth/login')
        access.validLogin();

    });

    it("Request pickup - As a receiver ", function () {
        cy.get(requestpickup.requestPickup1).click()
        
    })

    it("Request pickup - As a sender ", function () {
        cy.get(requestpickup.asasender).click()
        
    })

    it("Request pickup - As a receiver ", function () {
        cy.get(requestpickup.asaReceiver).click()

    })

    it("Request pickup - As a third Party ", function () {
        cy.get(requestpickup.asaThirdparty).click()

    })

    it("Request pickup - Delivery area ", function () {
        cy.get(requestpickup.deliveryarea1).click()

    })
    it("Request pickup - Select Area ", function () {
        cy.get(requestpickup.selectArea).click()

    })
    it("Request pickup - Pickup Details ", function () {
        cy.get(requestpickup.pickupDetailss).click()
        // cy.get(requestpickup.senderDetailss).type(requestpickup.senderText)
        // cy.get(requestpickup.senderNumber1x).click()
        // cy.get(requestpickup.senderNumbersx).select('Nigeria')

    })
    it("Request pickup - Drop off details ", function () {
        cy.get(requestpickup.dropoffDetails).click()
        // cy.get(requestpickup.receipientNamee).type(requestpickup.receipientText)
        // cy.get(requestpickup.selectreceiverCountry).click()
        // cy.get(requestpickup.countrynameText).select('Nigeria')
        // cy.get(requestpickup.receipientAddresss).type(requestpickup.receipientaddressText1)

    // })
    // // it("Request pickup - Package Details ", function () {
    // //     cy.get(requestpickup.packageDetailsx).type(requestpickup.packageText)
    // //     cy.get(requestpickup.selectQuantity).select('2')
    //         // cy.get(requestpickup.additemBtn).click()

    // })
    // // it("Request pickup - Vehicle type ", function () {
    // //     cy.get(requestpickup.vehicleType).click()

    })
    it("Request pickup - Description checkbox ", function () {
            cy.get(requestpickup.allowDescription).click()
            cy.get(requestpickup.descriptionbox).type(requestpickup.descriptionTxt)
            cy.get(requestpickup.paymentonDelivery).click()

    })
    it("Request pickup - Submit Request ", function () {
        cy.get(requestpickup.submitRequest).click()
    
})
})