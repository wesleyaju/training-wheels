it('must login successfully', function() {
    cy.visit('https://training-wheels-qaninja.herokuapp.com/login')

    cy.get('#nickId').type('papitorocks')
    cy.get('#passId').type('pwd123')
    cy.get('button[type="submit"]').click()

    const expectedText = 'Em breve você poderá participar de comunidades, adicionar amigos e deixar um Scraps. hahahahah'

    cy.get('h3[class^=title]')
        .should('have.text', 'Olá Papito, bem-vindo ao Orkut')

        // Expressões regulares para capturar elementos:
        //^= começa com;
        //*= contens,
        //$= termina com.

    cy.get('p[class=subheader]')
        .should('have.text', expectedText)
});
