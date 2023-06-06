/// <reference types="cypress" /> 

import { PUPPY_LIST } from '../constans/puppyList.constans.js'
import { USER_DETAILS_FORM } from '../constans/userDetailsForm.constans.js'

Cypress.Commands.add('typeDefaultUserDetailsWithPaymentMethod', (paymentMethod) => {
    cy.get(USER_DETAILS_FORM.NAME_INPUT).type('TestUser')
    cy.get(USER_DETAILS_FORM.ADDRESS_INPUT).type('TestAddress')
    cy.get(USER_DETAILS_FORM.EMAIL_INPUT).type('test@email.com')
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
