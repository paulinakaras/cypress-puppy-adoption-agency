/// <reference types="cypress" /> 

import { SELECT } from '../constans/common.constans.js'
import { PUPPY_LIST } from '../constans/puppyList.constans.js'
import { PUPPY_DETAILS } from '../constans/puppyDetails.constans.js'
import { PUPPY_ADDITIONAL_PRODUCTS } from '../constans/puppyAdditionalProducts.constans.js'
import { USER_DETAILS_FORM } from '../constans/userDetailsForm.constans.js'

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

        cy.get(USER_DETAILS_FORM.NAME_INPUT).type('TestUser')
        cy.get(USER_DETAILS_FORM.ADDRESS_INPUT).type('TestAddress')
        cy.get(USER_DETAILS_FORM.EMAIL_INPUT).type('test@email.com')
        cy.get(USER_DETAILS_FORM.PAY_TYPE_SELECT_LIST).select('Check')
        cy.get(USER_DETAILS_FORM.PLACE_ORDER_BUTTON).click()

        cy.get(PUPPY_LIST.ADOPTION_MESSAGE)
            .should("be.visible")
            .contains("Thank you for adopting a puppy!")
    })

    it('should adopt a Sparky puppy with Collar & Leash and pay by credit card', () => {
        cy.get(PUPPY_LIST.NEXT_PAGE_BUTTON).click()
        cy.get(PUPPY_LIST.SPARKY_VIEW_DETAILS_BUTTON).click()

        cy.get(PUPPY_DETAILS.ADOPT_ME_BUTTON).click()

        cy.get(PUPPY_ADDITIONAL_PRODUCTS.COLLAR_AND_LEASH_CHECKBOX).click()
        cy.get(PUPPY_ADDITIONAL_PRODUCTS.COMPLETE_THE_ADOPTION_BUTTON).click()

        cy.get(USER_DETAILS_FORM.NAME_INPUT).type('TestUser')
        cy.get(USER_DETAILS_FORM.ADDRESS_INPUT).type('TestAddress')
        cy.get(USER_DETAILS_FORM.EMAIL_INPUT).type('test@email.com')
        cy.get(USER_DETAILS_FORM.PAY_TYPE_SELECT_LIST).select('Credit card')
        cy.get(USER_DETAILS_FORM.PLACE_ORDER_BUTTON).click()

        cy.get(PUPPY_LIST.ADOPTION_MESSAGE)
            .should("be.visible")
            .contains("Thank you for adopting a puppy!")
    })

    it('should adopt two puppies with Collar & Leash and pay by credit card', () => {
        cy.get(PUPPY_LIST.BROOK_VIEW_DETAILS_BUTTON).click()

        cy.get(PUPPY_DETAILS.ADOPT_ME_BUTTON).click()

        cy.get(PUPPY_ADDITIONAL_PRODUCTS.ADOPT_ANOTHER_PUPPY_BUTTON).click()

        cy.get(PUPPY_LIST.NEXT_PAGE_BUTTON).click()
        cy.get(PUPPY_LIST.SPARKY_VIEW_DETAILS_BUTTON).click()

        cy.get(PUPPY_DETAILS.ADOPT_ME_BUTTON).click()

        cy.get(PUPPY_ADDITIONAL_PRODUCTS.COLLAR_AND_LEASH_CHECKBOX).eq(SELECT.FIRST_ELEMENT).click()
        cy.get(PUPPY_ADDITIONAL_PRODUCTS.COLLAR_AND_LEASH_CHECKBOX).eq(SELECT.SECOND_ELEMENT).click()
        cy.get(PUPPY_ADDITIONAL_PRODUCTS.COMPLETE_THE_ADOPTION_BUTTON).click()

        cy.get(USER_DETAILS_FORM.NAME_INPUT).type('TestUser')
        cy.get(USER_DETAILS_FORM.ADDRESS_INPUT).type('TestAddress')
        cy.get(USER_DETAILS_FORM.EMAIL_INPUT).type('test@email.com')
        cy.get(USER_DETAILS_FORM.PAY_TYPE_SELECT_LIST).select('Credit card')
        cy.get(USER_DETAILS_FORM.PLACE_ORDER_BUTTON).click()

        cy.get(PUPPY_LIST.ADOPTION_MESSAGE)
            .should("be.visible")
            .contains("Thank you for adopting a puppy!")
    })

    it('should adopt two puppies with three accessories and pay by credit card', () => {
        cy.get(PUPPY_LIST.BROOK_VIEW_DETAILS_BUTTON).click()

        cy.get(PUPPY_DETAILS.ADOPT_ME_BUTTON).click()

        cy.get(PUPPY_ADDITIONAL_PRODUCTS.ADOPT_ANOTHER_PUPPY_BUTTON).click()

        cy.get(PUPPY_LIST.NEXT_PAGE_BUTTON).click()
        cy.get(PUPPY_LIST.SPARKY_VIEW_DETAILS_BUTTON).click()

        cy.get(PUPPY_DETAILS.ADOPT_ME_BUTTON).click()

        cy.get(PUPPY_ADDITIONAL_PRODUCTS.COLLAR_AND_LEASH_CHECKBOX).eq(SELECT.FIRST_ELEMENT).click()
        cy.get(PUPPY_ADDITIONAL_PRODUCTS.TRAVEL_CARRIER_CHECKBOX).eq(SELECT.FIRST_ELEMENT).click()
        cy.get(PUPPY_ADDITIONAL_PRODUCTS.FIRST_VET_VISIT_CHECKBOX).eq(SELECT.FIRST_ELEMENT).click()
        cy.get(PUPPY_ADDITIONAL_PRODUCTS.COMPLETE_THE_ADOPTION_BUTTON).click()

        cy.get(USER_DETAILS_FORM.NAME_INPUT).type('TestUser')
        cy.get(USER_DETAILS_FORM.ADDRESS_INPUT).type('TestAddress')
        cy.get(USER_DETAILS_FORM.EMAIL_INPUT).type('test@email.com')
        cy.get(USER_DETAILS_FORM.PAY_TYPE_SELECT_LIST).select('Credit card')
        cy.get(USER_DETAILS_FORM.PLACE_ORDER_BUTTON).click()

        cy.get(PUPPY_LIST.ADOPTION_MESSAGE)
            .should("be.visible")
            .contains("Thank you for adopting a puppy!")
    })
})
