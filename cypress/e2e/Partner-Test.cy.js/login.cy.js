import {login} from "../../fixtures/partner-Selectors.js";
const access  = require("./validLogin.cy.js");
 
describe("login", function () {
    beforeEach(function () {
        cy.visit('https://staging.partner.sharply.africa/')
 
    });
})