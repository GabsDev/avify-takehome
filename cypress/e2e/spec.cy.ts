describe('Verify api data', () => {
  it('Verify api data is loaded', () => {
    cy.visit('http://localhost:8080/')
    cy.wait(1000)
    cy.get('#infoFuel').should('be.visible')
  })
})

describe('Verify pie chart', () => {
  it('Verify pie chart is loaded', () => {
    cy.visit('http://localhost:8080/')
    cy.wait(1000)
    cy.get('#pieChart').should('be.visible')
  })
})