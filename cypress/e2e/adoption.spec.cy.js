/// <reference types="cypress" /> 

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

    it('should adopt a puppy with two additional products or services and pay by check', () => {
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
    })

    it('should adopt a puppy with one additional product and pay by credit card', () => {
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
