import {homepage,Settings} from "../../fixtures/admin-Selectors.js";
const access  = require("./validlogin.cy.js");

describe("ORDERS", function () {
    beforeEach(function () {
        cy.visit('/')
        access.validlogin();
    })

    it("SETTINGS - Change Password ", function () {
        cy.get(homepage.viewSettings).click()
        cy.wait(3000)
        cy.get(".css-1y1wdjs > :nth-child(3)").click({force:true})
        cy.get(Settings.currentPassword).type("password2@")
        cy.get(Settings.newPassword).type("password")
        cy.get(Settings.confirmPassword).type("password")
        cy.get(Settings.updatePassword).click({force:true})

    })

    it("SETTINGS - View Company Details ", function () {
        cy.get(homepage.viewSettings).click()
        cy.wait(3000)
        cy.get(".css-1lxqctd > :nth-child(2)").click({force:true})

    })

    it("SETTINGS - Delivery Area and Pricing ", function () {
        cy.get(homepage.viewSettings).click()
        cy.wait(3000)
        cy.get(".css-1lxqctd > :nth-child(3) > .css-bnjhzj").click({force:true})
        cy.get(Settings.addArea).click()
        cy.get(Settings.areaName).type("ajegunle")
        cy.get(Settings.areaCovered).type("Ajegunle Estate")
        cy.get(".css-95b0tc").click()

    })










})