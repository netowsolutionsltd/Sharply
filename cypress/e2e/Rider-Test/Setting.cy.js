import { setting } from "../../fixtures/rider-Selector.js";
const access = require("./ValidLogin.cy.js");

describe("login", function () {
  beforeEach(function () {
    cy.visit("staging.rider.sharply.africa");
    access.ValidLogin();
  });

  it("Personal Details ", function () {
    cy.get(setting.Settings).click();
    cy.get(setting.personalDetails).click();
    cy.get(setting.emailField).type("test@yopmail.com");
    cy.get(setting.update).click();
  });

  //   it("Change password ", function () {
  //     cy.get(setting.Settings).click();
  //     cy.get(setting.changePassword).click();
  //     cy.get(setting.currentPassword).type("password");
  //     cy.get(setting.newPassword).type("password1");
  //     cy.get(setting.confirmPassword).type("password1");
  //     cy.get(setting.updatePassword).click();
  //   });
});
