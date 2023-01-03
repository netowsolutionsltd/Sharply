import { trackorder } from "../../fixtures/customer-Selectors.js";
const access = require("./validLogin.cy.js");

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false;
});

describe("trackorder", function () {
  before(function () {
    cy.visit("https://sharply-test.sharply.africa/auth/login");
    access.validLogin();
  });

  it("Track Order - As a Customer ", function () {});
  it("Track Order - Track my order ", function () {
    cy.get(trackorder.trackorderBtn1).click();
    cy.get(trackorder.orderNumberbar).type(trackorder.ordernumberTxt);
    cy.get(trackorder.trackorderBtn).click();
  });
  it("Track Order - New Delivery Request ", function () {
    cy.get(trackorder.newdeliveryRequest).click();
    // cy.get(trackorder.asaReceiver1).click()
    // cy.get(trackorder.thirdParty).click()
    // cy.get(trackorder.deliveryArear).click()
    // cy.get(trackorder.selectArea1).click()
    // cy.get(trackorder.pickupdetails1).click()
    // cy.get(trackorder.senderName1).type(trackorder.NameText)
    cy.get(trackorder.backBtn).click();
  });
});
