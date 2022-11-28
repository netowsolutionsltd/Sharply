import { Order } from "../../fixtures/rider-Selector.js";
const access = require("./ValidLogin.cy.js");

describe("login", function () {
  beforeEach(function () {
    cy.visit("staging.rider.sharply.africa");
    access.ValidLogin();
  });

  it("Dashboard Cards  ", function () {
    cy.get(Order.completedOrders).click();
    cy.get(Order.activeOrders).click();
  });

  it("View Orders", function () {
    cy.get(Order.viewOrder).click().wait(3000);
    cy.get(Order.backBtn).click();
  });

  it("Search for Orders", function () {
    cy.get(Order.viewOrder).click().wait(3000);
    cy.get(Order.searchField).type("Salami Layor").wait(5000).click();
  });

  // it("Filter Orders", function () {
  //   cy.get(Order.viewOrder).click().wait(3000);
  //   cy.get(Order.filterIcon).click();
  //   cy.get(Order.orderStatus).click();
  //   cy.get(Order.accepted).click();
  //   cy.get(Order.orderDate).click();
  //   cy.get(Order.from).click();
  //   cy.get();
  //  })
});
