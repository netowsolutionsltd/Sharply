import { login, homepage } from "../../fixtures/admin-Selectors.js";
const access = require("./validlogin.cy.js");

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false;
});

describe("login", function () {
  beforeEach(function () {
    cy.visit("/");
  });

  it("LOGIN - Invalid Login", function () {
    cy.get(login.emailInput).type("toppy@yahoo.com");
    cy.get(login.passwordInput).type(login.passwordText);
    cy.get(login.logInButton).click();
  });

  it("LOGIN - Valid Login", function () {
    cy.get(login.emailInput).type(login.emailText);
    cy.get(login.passwordInput).type(login.passwordText);
    cy.get(login.logInButton).click();
  });

  it("LOGOUT - should be able to logout", function () {
    access.validlogin();
    cy.get(homepage.viewSettings).click();
    cy.get(homepage.logoutBtn).click();
  });
});
