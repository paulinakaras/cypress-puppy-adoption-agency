/// <reference types="cypress" /> 

describe('Adopt Sparky Puppy', () => {
    it('should adopt a puppy with one additional product and pay by credit card', () => {
        cy.visit('https://spartantest-puppies.herokuapp.com')

        // cy.get('.next_page').scrollIntoView()
        cy.get('.next_page').click()
        cy.get(':nth-child(3) > .list_line_odd > .view > .button_to > .rounded_button').click() // view details sparky

        cy.get('.rounded_button').click()

        cy.get('#collar').click()

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
