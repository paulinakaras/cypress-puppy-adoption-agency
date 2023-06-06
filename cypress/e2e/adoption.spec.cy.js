/// <reference types="cypress" /> 

import { PUPPY_LIST } from '../constans/puppyList.constans.js'
import { PUPPY_DETAILS } from '../constans/puppyDetails.constans.js'
import { PUPPY_ADDITIONAL_PRODUCTS } from '../constans/puppyAdditionalProducts.constans.js'
import { USER_DETAILS_FORM } from '../constans/userDetailsForm.constans.js'

describe('Adoption Puppies Functionality', () => {

    beforeEach("visit home page", () => {
        cy.visit('https://spartantest-puppies.herokuapp.com')

        cy.clearLocalStorage();
        cy.clearCookies();

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    });

    it('should adopt a Brook puppy with Chewy Toy and Travel Carrier and pay by check', () => {
        cy.get(PUPPY_LIST.BROOK_VIEW_DETAILS_BUTTON).click()

        cy.get(PUPPY_DETAILS.ADOPT_ME_BUTTON).click()

        cy.get(PUPPY_ADDITIONAL_PRODUCTS.CHEW_TOY_CHECKBOX).click()
        cy.get(PUPPY_ADDITIONAL_PRODUCTS.TRAVEL_CARRIER_CHECKBOX).click()
        cy.get(PUPPY_ADDITIONAL_PRODUCTS.COMPLETE_THE_ADOPTION_BUTTON).click()

        cy.get(USER_DETAILS_FORM.NAME_INPUT).type('TestUser')
        cy.get(USER_DETAILS_FORM.ADDRESS_INPUT).type('TestAddress')
        cy.get(USER_DETAILS_FORM.EMAIL_INPUT).type('test@email.com')
        cy.get(USER_DETAILS_FORM.PAY_TYPE).select('Check')
        cy.get(USER_DETAILS_FORM.PLACE_ORDER_BUTTON).click()
        
        cy.get(PUPPY_LIST.ADOPTION_MESSAGE)
            .should("be.visible")
            .contains("Thank you for adopting a puppy!");
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
        cy.get(USER_DETAILS_FORM.PAY_TYPE).select('Credit card')
        cy.get(USER_DETAILS_FORM.PLACE_ORDER_BUTTON).click()

        cy.get(PUPPY_LIST.ADOPTION_MESSAGE)
            .should("be.visible")
            .contains("Thank you for adopting a puppy!");
    })

    it('should adopt random puppies with accesory by credit card', () => {
        // cy.get('.next_page').scrollIntoView()
        cy.get(':nth-child(3) > .list_line_odd > .view > .button_to > .rounded_button').click() // clieck view details brook
        cy.get('.rounded_button').click() // adopt me button


        cy.get('[action="/"] > .rounded_button').click() // adopt another puppy

        // cy.get('.next_page').scrollIntoView()
        cy.get('.next_page').click()
        cy.get(':nth-child(3) > .list_line_odd > .view > .button_to > .rounded_button').click() // view details sparky

        cy.get('.rounded_button').click()

        cy.get(':nth-child(3) > :nth-child(2) > #collar').click()
        cy.get(':nth-child(9) > :nth-child(2) > #collar').click()

        cy.get('[action="/orders/new"] > .rounded_button').click()

        cy.get('#order_name').type('TestUser')
        cy.get('#order_address').type('TestAddress')
        cy.get('#order_email').type('test@email.com')
        cy.get('#order_pay_type').select('Credit card')

        cy.get('.submit > input').click()
        cy.get('#notice').should("be.visible")
    })

    it('should adopt random puppies with accesories by credit card', () => {
        // cy.get('.next_page').scrollIntoView()
        cy.get(':nth-child(3) > .list_line_odd > .view > .button_to > .rounded_button').click() // clieck view details brook
        cy.get('.rounded_button').click() // adopt me button


        cy.get('[action="/"] > .rounded_button').click() // adopt another puppy

        // cy.get('.next_page').scrollIntoView()
        cy.get('.next_page').click()
        cy.get(':nth-child(3) > .list_line_odd > .view > .button_to > .rounded_button').click() // view details sparky

        cy.get('.rounded_button').click()

        // should be random ?
        cy.get(':nth-child(3) > :nth-child(2) > #collar').click()
        cy.get(':nth-child(5) > :nth-child(2) > #carrier').click()
        cy.get(':nth-child(6) > :nth-child(2) > #vet').click()

        cy.get('[action="/orders/new"] > .rounded_button').click()

        cy.get('#order_name').type('TestUser')
        cy.get('#order_address').type('TestAddress')
        cy.get('#order_email').type('test@email.com')
        cy.get('#order_pay_type').select('Credit card')

        cy.get('.submit > input').click()
        cy.get('#notice').should("be.visible")
    })
})
