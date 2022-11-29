import { login, setting } from "../../fixtures/rider-Selector.js";
const access = require("./ValidLogin.cy.js");

describe("login", function () {
  beforeEach(function () {
    cy.visit("staging.rider.sharply.africa");
  });

  it("LOGIN - Invalid Login", function () {
    cy.get(login.phoneNumfield).type("090887788667");
    cy.get(login.passwordInput).type("password");
    cy.get(login.logInButton).click();
  });

  it("LOGIN - Valid Login", function () {
    cy.get(login.phoneNumfield).type("07061549226");
    cy.get(login.passwordInput).type("password");
    cy.get(login.logInButton).click({ force: true });
  });

  it("LOGIN - Logout", function () {
    access.ValidLogin();
    cy.get(setting.Settings).click({ force: true });
    cy.get(setting.logoutBtn).click();
  });
});
