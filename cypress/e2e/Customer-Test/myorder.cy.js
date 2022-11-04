import {} from "../../fixtures/customer-Selectors.js";
const access  = require("./validLogin.cy.js");

describe("login", function () {
    beforeEach(function () {
        cy.visit('https://sharply-test.sharply.africa/auth/login')
        access.validLogin();
    });






})