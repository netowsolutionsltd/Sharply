import {myorder} from "../../fixtures/customer-Selectors.js";
const access  = require("./validLogin.cy.js");

describe("myorder", function () {
    before(function () {
        cy.visit('https://sharply-test.sharply.africa/auth/login')
        access.validLogin();

    });

    it("MY ORDER - As a customer ", function () {
        cy.get(myorder.myorder1).click()
        cy.get(myorder.searchBar).type(myorder.searchbarTxt)
        cy.get(myorder.creatOrder).click()
        cy.get(myorder.receiver).click()
        cy.get(myorder.thirdParty).click()
        cy.get(myorder.deliveryArea).click()
        cy.get(myorder.chooseArea).click()
        cy.wait(3000)
        // cy.get(myorder.pickupDetails).click({force:true})
        // cy.wait(3000)
        // cy.get(myorder.senderName).type(myorder.sendernameTxt),({force:true})
        cy.wait(3000)
        // cy.get(myorder.dropoffDetails).click()
        cy.wait(3000)
        cy.get(myorder.packageDetails).type(myorder.detailTxt), ({force:true})
    });
})