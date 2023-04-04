

it('must score marvel top 5', function () {
    cy.visit('https://training-wheels-qaninja.herokuapp.com/checkboxes')

    const movies = [
        'guardians2',
        'cap3',
        'strange',
        'avengers4',
        'spider3'
    ]

    movies.forEach(function (m) {
        cy.get(`input[name=${m}]`)
            .click()
            .should('be.checked')

    })
})