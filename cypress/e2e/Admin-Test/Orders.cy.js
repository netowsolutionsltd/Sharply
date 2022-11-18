import {homepage,Orders} from "../../fixtures/admin-Selectors.js";
const access  = require("./validlogin.cy.js");
Cypress.on('uncaught:exception', (error, runnable) => {
    return false
})
describe("ORDERS", function () {
    beforeEach(function () {
        cy.visit('/')
        access.validlogin();
    })

    // it("ORDERS - Search for orders ", function () {
    //     cy.get(homepage.viewOrders).click()
    //     cy.wait(3000)
    //     cy.get(Orders.ordersField).type(Orders.ordersText)
    //     cy.get(Orders.orderNumber).click()
    //     cy.wait(3000)

    // })

   

    it("ORDERS - accept orders ", function () {
        cy.get(homepage.viewOrders).click()
        cy.wait(3000)
        cy.get(Orders.filterIcon).click()
        cy.get(Orders.orderStatus).click()
        cy.get(Orders.pending).click()
        cy.wait(3000)
        cy.get(Orders.updateBtn).click()
        cy.wait(2000)
        cy.get(Orders.pendingOrder).click()
        cy.wait(3000)
        cy.get(Orders.talabi).select ('selectOptionDropdown')
        
        // cy.get(Orders.ordersField).type(Orders.ordersText)
        // cy.wait(3000)
        
       // cy.get(Orders.acceptBtn).click()

    })

    // it("ORDERS -Create pickup order ", function () {
    //     cy.get(homepage.viewOrders).click()
    //     cy.wait(3000)
    //     cy.get(Orders.createOrderBtn).click()
    //     cy.wait(3000)
    //     cy.get(Orders.pickupBtn).click()
    //     cy.get(Orders.deliveryAreaField).click()
    //     cy.get(Orders.addressText).type()
    //     cy.get(Orders.selectSender).click()
    //     cy.get(Orders.senderName).click()
    //     cy.get(Orders.itemField).type(Orders.items)
    //     cy.get(Orders.allowDescription).click()
    //     cy.get(Orders.descriptionField).type(Orders.description)
    //     cy.get(Orders.deliveryPaid).click()
    //     cy.get('#rider').select('tobi').should('have.value','62439c8664aa49002dd08d4d')
    //     cy.get(Orders.submitRequestBtn).click()


    // })

    // it("ORDERS - Create delivery order ", function () {
    //     cy.get(homepage.viewOrders).click()
    //     cy.wait(3000)
    //     cy.get(Orders.createOrderBtn).click()
    //     cy.wait(3000)
    //     cy.get(Orders.delivery).click()
    //     cy.get(Orders.deliveryAreaField).click()
    //     cy.get(Orders.address2).click()
    //     cy.get(Orders.selectSender).click()
    //     cy.get(Orders.senderName).click()
    //     cy.get(Orders.itemField).type(Orders.items2)
    //     cy.get(Orders.allowDescription).click()
    //     cy.get(Orders.descriptionField).type(Orders.description2)
    //     cy.get(Orders.deliveryPaid).click()
    //     cy.get('#rider').select('tofunmi').should('have.value','62439db364aa49002dd08daf')
    //     cy.get(Orders.submitRequestBtn).click()

    // })

    // it("ORDERS - Create pickup & delivery order ", function () {
    //     cy.get(homepage.viewOrders).click()
    //     cy.wait(3000)
    //     cy.get(Orders.createOrderBtn).click()
    //     cy.wait(3000)
    //     cy.get(Orders.pdOrder).click()
    //     cy.get(Orders.deliveryAreaField).click()
    //     cy.get(Orders.address3).click()
    //     cy.get(Orders.selectSender4).click()
    //     cy.get(Orders.senderName3).click()
    //     cy.get(Orders.selectReceiver).click()
    //     cy.get(Orders.receiverName).click()
    //     cy.get(Orders.itemField).type(Orders.items3)
    //     cy.get(Orders.allowDescription).click()
    //     cy.get(Orders.descriptionField).type(Orders.description3)
    //     cy.get(Orders.deliveryPaid).click()
    //     cy.get('#rider').select('tofunmi').should('have.value','62439db364aa49002dd08daf')
    //     cy.get(Orders.submitRequestBtn).click()

    // })

    // it("ORDERS - Should be able to filter orders by accepted", function () {
    //     cy.get(homepage.viewOrders).click()
    //     cy.wait(3000)
    //     cy.get(Orders.filterIcon).click()
    //     cy.get(Orders.accepted).click()
    //     cy.get(Orders.orderDate).click()
    //     cy.get(Orders.datePicker1).click()
    //     cy.get(Orders.date1).click()
    //     cy.get(Orders.datePicker2).click()
    //     cy.get(Orders.date2).click()
    //     cy.get(Orders.riderdropdown).click()
    //     cy.get('#rider').select('tofunmi').should('have.value','62439db364aa49002dd08daf')
    //     cy.get(Orders.updateBtn).click()

    // })

    // it("ORDERS - Should be able to filter orders by pending", function () {
    //     cy.get(homepage.viewOrders).click()
    //     cy.wait(3000)
    //     cy.get(Orders.filterIcon).click()
    //     cy.get(Orders.pending).click({force:true})
    //     cy.get(Orders.orderDate).click({force:true})
    //     cy.get(Orders.datePicker1).click({force:true})
    //     cy.get(Orders.date1).click()
    //     cy.get(Orders.datePicker2).click()
    //     cy.get(Orders.date2).click()
    //     cy.get(Orders.riderdropdown).click()
    //     cy.get('#rider').select('Moyo').should('have.value','6284cd55cbd86b002d4ed145')
    //     cy.get(Orders.updateBtn).click()

    // })
     // it("ORDERS - Cancel orders ", function () {
    //     cy.get(homepage.viewOrders).click({force:true})
    //     cy.wait(3000)
    //     cy.get(Orders.ordersField).type(Orders.ordersText)
    //     cy.wait(3000)
    //     cy.get(Orders.orderNumber).click({force:true})
    //     cy.get(Orders.cancelMenu).click({force:true})
    //     cy.get(Orders.cancelOrder).click({force:true})
    //     cy.get(Orders.confirmBtn).click({force:true})

    // })
    // it("ORDERS - Stop cancel orders ", function () {
    //     cy.get(homepage.viewOrders).click()
    //     cy.wait(3000)
    //     cy.get(Orders.ordersField).type(Orders.ordersText)
    //     cy.wait(3000)
    //     cy.get(Orders.orderNumber).click()
    //     cy.get(Orders.cancelMenu).click()
    //     cy.get(Orders.cancelOrder).click()
    //     cy.get(Orders.cancelBtn).click()

    // })


        
 })


