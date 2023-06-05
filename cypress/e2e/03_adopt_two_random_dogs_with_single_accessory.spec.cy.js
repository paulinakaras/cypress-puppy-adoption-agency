/// <reference types="cypress" /> 

describe('Adopt Two Random Dogs With Single Accessory', () => {
    it('should adopt random puppies with accesory by credit card', () => {
        cy.visit('https://spartantest-puppies.herokuapp.com')

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

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    })
})