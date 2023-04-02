it('must login successfully', function() {
    cy.visit('https://training-wheels-qaninja.herokuapp.com/login')

    cy.get('#nickId').type('papitorocks')
    cy.get('#passId').type('pwd123')
    cy.get('button[type="submit"]').click()
});
