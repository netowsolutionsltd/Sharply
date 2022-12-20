import {homepage,Orders} from "../../fixtures/admin-Selectors.js";
const access  = require("./validlogin.cy.js");
Cypress.on('uncaught:exception', (error, runnable) => {
    return false
})
describe("ORDERS", function () {
    beforeEach(function () {
    access.validlogin();

    })

    it("ORDERS - Cancel orders ", function () {


    it("ORDERS - Stop cancel orders ", function () {
        cy.get(homepage.viewOrders).click({force:true})
        cy.wait(3000)
        cy.get(Orders.ordersField).type(Orders.ordersText)
        cy.get(Orders.filterOrdersBtn).click()
        cy.get(Orders.orderStatus).click()
        cy.get(Orders.accepted).click()
        cy.get(Orders.updateBtn).click()
        cy.get(Orders.orderAccepted).click()
        cy.get(Orders.cancelMenu).click()
        cy.get(Orders.cancelOrder).click()
        cy.get(Orders.confirmBtn).click() 

    })

    it("ORDERS - accept orders ", function () {
        cy.get(homepage.viewOrders).click()
        cy.wait(3000)
        cy.get(Orders.filterOrdersBtn).click()
        cy.get(Orders.orderStatus).click()
        cy.get(Orders.pending).click()
        cy.get(Orders.updateBtn).click()
        cy.wait(3000)
        cy.get(Orders.pendingOrder).click()
        cy.get('#rider'). select('talabi')
        cy.get(Orders.acceptBtn).click()


       })

    it("ORDERS -Create pickup order ", function () {
        cy.get(homepage.viewOrders).click()
        cy.wait(3000)
        cy.get(Orders.createOrderBtn).click()
        cy.wait(3000)
        cy.get(Orders.orderNumber).click({force:true})
        cy.get(Orders.cancelMenu).click({force:true})
        cy.get(Orders.cancelOrder).click({force:true})
        cy.get(Orders.confirmBtn).click({force:true})
        cy.get(Orders.pickupBtn).click()
        cy.get(Orders.deliveryAreaField).click()
        cy.get(Orders.address).click()
        cy.get(Orders.priceSystem). select('weightFee')
        cy.get(Orders.selectSender).click()
        cy.get(Orders.senderName).click()
        cy.get(Orders.itemField).type(Orders.items2)
        cy.get(Orders.allowDescription).click()
        cy.get(Orders.descriptionField).type(Orders.description)
        cy.get(Orders.deliveryPaid).click()
        //cy.get(Orders.vehicle). select('van')
        cy.get('#rider'). select('pasuma')

        cy.get(Orders.submitRequestBtn).click()


    })
    it("ORDERS - Stop cancel orders ", function () {

    it("ORDERS - Create delivery order ", function () {
        cy.get(homepage.viewOrders).click()
        cy.wait(3000)
        cy.get(Orders.ordersField).type(Orders.ordersText)
        cy.get(Orders.createOrderBtn).click()
        cy.wait(3000)
        cy.get(Orders.orderNumber).click()
        cy.get(Orders.cancelMenu).click()
        cy.get(Orders.cancelOrder).click()
        cy.get(Orders.cancelBtn).click()
        cy.get(Orders.delivery).click()
        cy.get(Orders.deliveryAreaField).click()
        cy.get(Orders.address4).click()
        cy.get(Orders.priceSystem). select('flatFee')
        cy.get(Orders.receiverNameF).click()
        cy.get(Orders.selectReceiver).click()
        cy.get(Orders.itemField).type(Orders.items3)
        cy.get(Orders.allowDescription).click()
        cy.get(Orders.descriptionField).type(Orders.description2)
        cy.get(Orders.deliveryPaid).click()
        cy.get(Orders.vehicle). select('bike')
        cy.get('#rider').select('Olutee')
        cy.get(Orders.submitRequestBtn).click()


    })

    // it("ORDERS - accept orders ", function () {
    //     cy.get(homepage.viewOrders).click()
    //     cy.wait(3000)
    //     cy.get(Orders.ordersField).type(Orders.ordersText)
    //     cy.wait(3000)
    //     cy.get(Orders.orderNumber2).click()
    //     cy.get('#rider').select('Stanley').should('have.value','624728baf670bb002d40368e')
    //     cy.get(Orders.acceptBtn).click()

    // })

    // it("ORDERS -Create pickup order ", function () {
    //     cy.get(homepage.viewOrders).click()
    //     cy.wait(3000)
    //     cy.get(Orders.createOrderBtn).click()
    //     cy.wait(3000)
    //     cy.get(Orders.pickupBtn).click()
    //     cy.get(Orders.deliveryAreaField).click()
    //     cy.get(Orders.address).click()
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

    it("ORDERS - Create pickup & delivery order ", function () {
        cy.get(homepage.viewOrders).click()
        cy.wait(3000)
        cy.get(Orders.createOrderBtn).click()
        cy.wait(3000)
        cy.get(Orders.pdOrder).click()
        cy.get(Orders.deliveryAreaField).click()
        cy.get(Orders.address3).click()
        cy.get(Orders.priceSystem). select('weightFee')
        cy.get(Orders.senderPD).click()
        cy.get(Orders.senderName6).click()
        cy.get(Orders.receiverPD).click()
        cy.get(Orders.receiverName6).click()
        cy.get(Orders.item3F).type('food,shoe and bag')
        cy.get(Orders.allowDescription).click()
        cy.get(Orders.descriptionField).type(Orders.description3)
        cy.get(Orders.deliveryPaid).click()
        cy.get('#rider').select('pasuma')
        cy.get(Orders.submitRequestBtn).click()

    })


 })
    it("ORDERS - Should be able to filter orders by accepted", function () {
        cy.get(homepage.viewOrders).click()
        cy.wait(3000)
        cy.get(Orders.filterIcon).click()
        cy.get(Orders.accepted).click()
        cy.get(Orders.orderDate).click()
        cy.get(Orders.datePicker1).click()
        cy.get(Orders.date1).click()
        cy.get(Orders.datePicker2).click()
        cy.get(Orders.date2).click()
        cy.get(Orders.riderdropdown).click()
        cy.get('#rider').select('pasuma')
        cy.get(Orders.updateBtn).click()

    })

    it("ORDERS - Should be able to filter orders by pending", function () {
        cy.get(homepage.viewOrders).click()
        cy.wait(3000)
        cy.get(Orders.filterIcon).click()
        cy.get(Orders.pending).click({force:true})
        cy.get(Orders.orderDate).click({force:true})
        cy.get(Orders.datePicker1).click({force:true})
        cy.get(Orders.date1).click()
        cy.get(Orders.datePicker2).click()
        cy.get(Orders.date2).click()
        cy.get(Orders.riderdropdown).click()
        cy.get('#rider').select('pasuma')
        cy.get(Orders.updateBtn).click()
    })
    
    })
})