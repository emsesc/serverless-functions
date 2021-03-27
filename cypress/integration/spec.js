describe('My First Test', () => {
  it('finds the content "emotion"', () => {
    cy.visit('./index.html')
    cy.contains('emotion')
  })
})
