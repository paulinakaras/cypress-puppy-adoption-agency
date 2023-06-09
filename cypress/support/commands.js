/// <reference types="cypress" /> 

import { PUPPY_LIST } from '../fixtures/pages/puppyList.js'
import { USER_DETAILS_FORM } from '../fixtures/pages/userDetailsForm.js'

import { TEST_USER_DATA } from '../fixtures/testUserData.js'

Cypress.Commands.add('typeDefaultUserDetailsWithPaymentMethod', (paymentMethod) => {
    cy.get(USER_DETAILS_FORM.NAME_INPUT).type(TEST_USER_DATA.NAME)
    cy.get(USER_DETAILS_FORM.ADDRESS_INPUT).type(TEST_USER_DATA.ADDRESS)
    cy.get(USER_DETAILS_FORM.EMAIL_INPUT).type(TEST_USER_DATA.EMAIL)
    cy.get(USER_DETAILS_FORM.PAY_TYPE_SELECT_LIST).select(paymentMethod)
})

Cypress.Commands.add('placeOrder', () => {
    cy.get(USER_DETAILS_FORM.PLACE_ORDER_BUTTON).click()
})

Cypress.Commands.add('verifySuccessfullAdoptionMessage', () => {
    cy.get(PUPPY_LIST.ADOPTION_MESSAGE)
        .should("be.visible")
        .contains("Thank you for adopting a puppy!")
})
