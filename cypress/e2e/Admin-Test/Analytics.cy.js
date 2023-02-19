import { homepage, analytic } from "../../fixtures/admin-Selectors.js";
const access = require("./validlogin.cy.js");

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false;
});

describe("ANALYTIS", function () {
  beforeEach(function () {
    cy.visit("/");
    access.validlogin();
  });
  it("Analytics", function () {
    cy.get(homepage.viewAnalytics).click();
    cy.get(analytic.order).click().wait(3000);
    cy.get(analytic.revenue).click().wait(3000);
    cy.get(analytic.customer).click().wait(3000);
    cy.get(analytic.rider).click().wait(3000);
  });
});
