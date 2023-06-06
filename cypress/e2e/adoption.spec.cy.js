/// <reference types="cypress" /> 

import { SELECT } from '../fixtures/common/constans.js'
import { PUPPY_LIST } from '../fixtures/pages/puppyList.js'
import { PUPPY_DETAILS } from '../fixtures/pages/puppyDetails.js'
import { PUPPY_ADDITIONAL_PRODUCTS } from '../fixtures/pages/puppyAdditionalProducts.js'

import { } from '../support/commands.js'

describe('Adoption Puppies Functionality', () => {

    beforeEach("visit home page", () => {
        cy.visit('https://spartantest-puppies.herokuapp.com')

        cy.clearLocalStorage()
        cy.clearCookies()

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    })

    it('should adopt a Brook puppy with Chewy Toy and Travel Carrier and pay by check', () => {
        cy.get(PUPPY_LIST.BROOK_VIEW_DETAILS_BUTTON).click()

        cy.get(PUPPY_DETAILS.ADOPT_ME_BUTTON).click()

        cy.get(PUPPY_ADDITIONAL_PRODUCTS.CHEW_TOY_CHECKBOX).click()
        cy.get(PUPPY_ADDITIONAL_PRODUCTS.TRAVEL_CARRIER_CHECKBOX).click()
        cy.get(PUPPY_ADDITIONAL_PRODUCTS.COMPLETE_THE_ADOPTION_BUTTON).click()

        cy.typeDefaultUserDetailsWithPaymentMethod(PUPPY_DETAILS.CHECK_PAYMENT_OPTION)
        cy.placeOrder()

        cy.verifySuccessfullAdoptionMessage()
    })

    it('should adopt a Sparky puppy with Collar & Leash and pay by credit card', () => {
        cy.get(PUPPY_LIST.NEXT_PAGE_BUTTON).click()
        cy.get(PUPPY_LIST.SPARKY_VIEW_DETAILS_BUTTON).click()

        cy.get(PUPPY_DETAILS.ADOPT_ME_BUTTON).click()

        cy.get(PUPPY_ADDITIONAL_PRODUCTS.COLLAR_AND_LEASH_CHECKBOX).click()
        cy.get(PUPPY_ADDITIONAL_PRODUCTS.COMPLETE_THE_ADOPTION_BUTTON).click()

        cy.typeDefaultUserDetailsWithPaymentMethod(PUPPY_DETAILS.CREDIT_CARD_PAYMENT_OPTION)
        cy.placeOrder()

        cy.verifySuccessfullAdoptionMessage()
    })

    it('should adopt two random puppies with Collar & Leash and pay by credit card', () => {
        cy.get(PUPPY_LIST.VIEW_DETAILS_BUTTON).eq(getRandomPuppyNumber()).click()

        cy.get(PUPPY_DETAILS.ADOPT_ME_BUTTON).click()

        cy.get(PUPPY_ADDITIONAL_PRODUCTS.ADOPT_ANOTHER_PUPPY_BUTTON).click()

        cy.get(PUPPY_LIST.NEXT_PAGE_BUTTON).click()
        cy.get(PUPPY_LIST.VIEW_DETAILS_BUTTON).eq(getRandomPuppyNumber()).click()

        cy.get(PUPPY_DETAILS.ADOPT_ME_BUTTON).click()

        cy.get(PUPPY_ADDITIONAL_PRODUCTS.COLLAR_AND_LEASH_CHECKBOX).eq(SELECT.FIRST_ELEMENT).click()
        cy.get(PUPPY_ADDITIONAL_PRODUCTS.COLLAR_AND_LEASH_CHECKBOX).eq(SELECT.SECOND_ELEMENT).click()
        cy.get(PUPPY_ADDITIONAL_PRODUCTS.COMPLETE_THE_ADOPTION_BUTTON).click()

        cy.typeDefaultUserDetailsWithPaymentMethod(PUPPY_DETAILS.CREDIT_CARD_PAYMENT_OPTION)
        cy.placeOrder()

        cy.verifySuccessfullAdoptionMessage()
    })

    it('should adopt two random puppies with three accessories and pay by credit card', () => {
        cy.get(PUPPY_LIST.VIEW_DETAILS_BUTTON).eq(getRandomPuppyNumber()).click()

        cy.get(PUPPY_DETAILS.ADOPT_ME_BUTTON).click()

        cy.get(PUPPY_ADDITIONAL_PRODUCTS.ADOPT_ANOTHER_PUPPY_BUTTON).click()

        cy.get(PUPPY_LIST.NEXT_PAGE_BUTTON).click()
        cy.get(PUPPY_LIST.VIEW_DETAILS_BUTTON).eq(getRandomPuppyNumber()).click()

        cy.get(PUPPY_DETAILS.ADOPT_ME_BUTTON).click()

        cy.get(PUPPY_ADDITIONAL_PRODUCTS.COLLAR_AND_LEASH_CHECKBOX).eq(SELECT.FIRST_ELEMENT).click()
        cy.get(PUPPY_ADDITIONAL_PRODUCTS.TRAVEL_CARRIER_CHECKBOX).eq(SELECT.FIRST_ELEMENT).click()
        cy.get(PUPPY_ADDITIONAL_PRODUCTS.FIRST_VET_VISIT_CHECKBOX).eq(SELECT.FIRST_ELEMENT).click()
        cy.get(PUPPY_ADDITIONAL_PRODUCTS.COMPLETE_THE_ADOPTION_BUTTON).click()

        cy.typeDefaultUserDetailsWithPaymentMethod(PUPPY_DETAILS.CREDIT_CARD_PAYMENT_OPTION)
        cy.placeOrder()

        cy.verifySuccessfullAdoptionMessage()
    })

    function getRandomPuppyNumber() {
        return Math.floor(Math.random() * 4);
    }
})
