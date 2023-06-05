describe('Basic Functionality', () => {
  it('should visit home page', () => {
    cy.visit('https://spartantest-puppies.herokuapp.com')

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
  })
})