// import {myaccount} from "mocha";
import {myaccount} from "../../fixtures/customer-Selectors.js";
const access  = require("./validLogin.cy.js");

describe("myaccount", function () {
    before(function () {
        cy.visit('https://sharply-test.sharply.africa/auth/login')
        access.validLogin();

    });

    it("MY ACCOUNT - As a sender ", function () {
        cy.get(myaccount.myAccount1).click({force:true})
        cy.get(myaccount.personalDetails).click()
        cy.wait(3000)
        cy.get(myaccount.emailField).type(myaccount.emailTxt), ({force:true})
        cy.get(myaccount.selectCountry).click()
        cy.get(myaccount.selectedCountry).click()
        cy.get(myaccount.phoneNumber).type(myaccount.numberTxt)
        cy.get(myaccount.updateBtn).click()
        cy.get(myaccount.cancelBtn).click()
        cy.get(myaccount.addressBook).click()
        cy.get(myaccount.addAddress).click()
        cy.get(myaccount.aliasName).type(myaccount.aliasTxt)
        cy.get(myaccount.address).type(myaccount.addressTxt)
        cy.get(myaccount.addAddressBtn).click()
        cy.get(myaccount.backBtn).click()
        cy.wait(3000)
        cy.get(myaccount.backBtn1).click({force:true})
        cy.get(myaccount.changePassword).click()
        cy.get(myaccount.currentPassword).type(myaccount.passwordTxt)
        cy.get(myaccount.newPassword).type(myaccount.newpasswordTxt)
        cy.get(myaccount.confirmPassword).type(myaccount.confirmpasswordTxt)
        // cy.get(myaccount.updatepasswordBtn).click()
        cy.get(myaccount.cancelBtn).click()
        cy.get(myaccount.contactUs).click()
        // cy.get(myaccount.callUs).click()
        // cy.get(myaccount.sendMessage).click()
        // cy.get(myaccount.sendFeedback).click()
        cy.wait(3000)
        cy.get(myaccount.backBtnn).click()
        cy.get(myaccount.logoutBtn).click()

    });





});