describe('test', () => {
  it('test one', () => {
    cy.visit('https://google.com')
    cy.contains("Gmail").should("exist")//for text
    cy.get('div')//for elements
  })
  it("Test two",()=>{
    cy.visit('https://yemis.netlify.app/contact/contact')
    cy.contains("Submit").click()
    cy.go("back")
  })
  it('Test Three',()=>{
    cy.visit('https://zerodha.com/brokerage-calculator/#tab-equities')
    cy.contains("Signup").click()
    cy.get('input').type('2348060515523')
    // cy.get("input[id='myID']").type('9623798768')
    cy.contains('Continue').click()
  })
})