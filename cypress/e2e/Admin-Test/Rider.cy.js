import { homepage, Rider, Orders } from "../../fixtures/admin-Selectors.js";
const access = require("./validlogin.cy.js");

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false;
});

describe("Riders", function () {
  beforeEach(function () {
    cy.visit("/");
    access.validlogin();
  });

  it("ORDERS - Search for rider ", function () {
    cy.get(homepage.viewRiders).click();
    cy.wait(3000);
    cy.get(Rider.searchField).type(Rider.riderName);
  });

  it("ORDERS - Add rider ", function () {
    cy.get(homepage.viewRiders).click();
    cy.wait(3000);
    cy.get(Rider.addRiderBtn).click();
    cy.get(Rider.nameField).type(Rider.nameText);
    cy.get(Rider.numberField).type(Rider.riderNumber);
    cy.get("#vehicle").select("Bike").should("have.value", "bike");
    cy.get(Rider.vehicleNumberF).type(Rider.vnumberText);
    cy.get(Rider.allowSms).click();
    cy.get(Rider.saveDetailsBtn).click();
    cy.wait(2000);
  });

  it("ORDERS - Copy rider number", function () {
    cy.get(homepage.viewRiders).click();
    cy.wait(3000);
    cy.get(Rider.riderNameF).click();
    cy.get(Rider.copyIcon).click();
    cy.wait(2000);
  });

  it("ORDERS - Edit rider details", function () {
    cy.get(homepage.viewRiders).click();
    cy.wait(3000);
    cy.get(Rider.riderNameF).click();
    cy.get(Rider.editIcon).click();
    cy.wait(2000);
    cy.get(Rider.numberField).type("08055465656");
    cy.get("#vehicle").select("Car").should("have.value", "car");
    cy.get(Rider.vehicleNumberF).type(Rider.vnumberText2);
    cy.get(Rider.editDetailsBtn).click();
  });

  // it("ORDERS - Should be able to activate rider", function () {
  //     cy.get(homepage.viewRiders).click()
  //     cy.wait(3000)
  //     cy.get(Rider.riderNameF).click()
  //     cy.wait(2000)
  //     cy.get(Orders.activationToggle).click()

  // })

  // it("ORDERS - Should be able to deactivate rider", function () {
  //     cy.get(homepage.viewRiders).click()
  //     cy.wait(3000)
  //     cy.get(Rider.riderNameF).click()
  //     cy.wait(2000)
  //     cy.get(Orders.deactivationToggle).click()

  // })
});
