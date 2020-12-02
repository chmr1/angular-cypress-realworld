// define('Cadastro', () => {
//     it('Sucesso', () => {
//         cy.visit('http://localhost:4200/');
//         cy.get('.navbar-nav > .nav-item:nth-child(3) > .nav-link').click();
//         cy.get('.ng-valid').click();
//         cy.get('.ng-valid').type('chmr1');
//         cy.get('.form-group:nth-child(2) > .form-control').type('chmr1@hotmail.com');
//         cy.get('.ng-untouched').type('12345678');
//         cy.get('.btn').click();
//         cy.get('.ng-dirty:nth-child(4)').submit();
//     })
// })

describe('Conduit Cadastro', () => {
    const usuario = 'usuario' + (new Date()).getTime()
    const senha = 'senha' + (new Date()).getTime()
    it('Novo Usuário', () => {
        cy.visit('/register')
        cy.get('[formcontrolname=username]').type(usuario)
        cy.get('[formcontrolname=email]').type(usuario+'@email.com')
        cy.get('[formcontrolname=password]').type(senha)
        cy.get('.btn').click()
        cy.contains('.nav-item:nth-child(4) > .nav-link', usuario).should('be.visible')
    })

    it('Usuário já existe', () => {
        cy.visit('/register')
        cy.get('[formcontrolname=username]').type(usuario)
        cy.get('[formcontrolname=email]').type(usuario+'@email.com')
        cy.get('[formcontrolname=password]').type(senha)
        cy.get('.btn').click()
        cy.location('pathname').should('equal', '/register')
        cy.get('.error-message > li:nth-child(1)').should('not.be.empty')
    })
})