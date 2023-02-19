import { Homepage } from "../../fixtures/customer-Selectors.js";
const access = require("./validLogin.cy.js");

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false;
});

describe("login", function () {
  before(function () {
    cy.visit("https://sharply-test.sharply.africa/auth/login");
    access.validLogin();
  });
  it("click on request pickup", function () {
    cy.get(Homepage.requestPickup).click();
  });
  it("click on home page button ", function () {
    cy.get(Homepage.backBtn).click();
  });
  it("clcik on track order button ", function () {
    cy.get(Homepage.trackOrder).click().wait(3000);
  });
  it("click on back button ", function () {
    cy.get(Homepage.backBtn).click();
  });
  it("click on my orders ", function () {
    cy.get(Homepage.myOrders).click().wait(3000);
  });
  it("click on back button", function () {
    cy.get(Homepage.backBtn).click();
  });
  it("click on my accoount button", function () {
    cy.get(Homepage.myAccount).click().wait(3000);
  });
  it("click on back button ", function () {
    cy.get(Homepage.backBtn).click();
  });
});
