import { myorder } from "../../fixtures/customer-Selectors.js";
const access = require("./validLogin.cy.js");

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false;
});

describe("myorder", function () {
  beforeEach(function () {
    cy.visit("https://sharply-test.sharply.africa/auth/login");
    access.validLogin();
  });
  it("MY ORDER - Create Order ", function () {
    cy.get(myorder.myorder1).click();
  });
  it("My Order- As a Customer", function () {
    cy.get(myorder.myorder11).click();
    cy.get(myorder.searchBar).type(myorder.searchbarTxt);
    cy.get(myorder.checkexistingorder).click();
    // cy.get(myorder.backBtn1).click({force:true})
    cy.get(myorder.createOderBtnn).click();
    cy.get(myorder.asasender).click({ force: true });
    cy.get(myorder.asaReceiver).click();
    cy.get(myorder.asaThirdparty).click();
    cy.get(myorder.deliveryarea1).click();
    cy.get(myorder.selectArea).click();
    cy.get(myorder.pickupDetailss).click();
    // cy.get(myorder.senderDetailss).type(requestpickup.senderText)
    // cy.get(myorder.senderNumber1x).click()
    // cy.get(myorder.senderNumbersx).select('Nigeria')
    cy.get(myorder.dropoffDetails).click();
    // cy.get(myorder.receipientNamee).type(myorder.receipientText)
    // cy.get(myorder.selectreceiverCountry).click()
    // cy.get(myorder.countrynameText).select('Nigeria')
    // cy.get(myorder.receipientAddresss).type(myorder.receipientaddressText1)
    // cy.get(myorder.packageDetailsx).type(myorder.packageText)
    //  cy.get(myorder.selectQuantity).select('2')
    //  cy.get(myorder.additemBtn).click()
    //     cy.get(myorder.vehicleType).click()
    cy.get(myorder.allowDescription).click();
    cy.get(myorder.descriptionbox).type(myorder.descriptionTxt);
    cy.get(myorder.paymentonDelivery).click();
    cy.get(myorder.submitRequest).click();
  });
});
