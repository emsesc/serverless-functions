describe('Increment Count', () => {
  it('Clicks button to increment', () => {
    cy.visit('./index.html')
    cy.get('a').click()
    cy.get('span').should(($span) => {
      const text = $span.text()
    
      expect(text).to.include('2')
    })
  })
})
