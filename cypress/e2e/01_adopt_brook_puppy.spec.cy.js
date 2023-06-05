/// <reference types="cypress" /> 

describe('Adopt Brook Puppy', () => {
    it('should adopt a puppy with two additional products or services and pay by check', () => {
        cy.visit('https://spartantest-puppies.herokuapp.com')

        cy.get(':nth-child(3) > .list_line_odd > .view > .button_to > .rounded_button').click() // clieck view details brook
        cy.get('.rounded_button').click() // adopt me button
        cy.get('#toy').click() // mark chew toy
        cy.get('#carrier').click() // mark traver carrier

        cy.get('[action="/orders/new"] > .rounded_button').click() // complete the adotpion

        cy.get('#order_name').type('TestUser')
        cy.get('#order_address').type('TestAddress')
        cy.get('#order_email').type('test@email.com')
        cy.get('#order_pay_type').select('Check')

        cy.get('.submit > input').click()
        cy.get('#notice').should("be.visible")

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    })
})
