/* global describe,it,cy */

describe('Petgram', () => {
  it('para ver si la app funciona', () => {
    cy.visit('/')
  })

  it('navegamos a una categoria y vemos fotos', () => {
    cy.visit('/pet/2')
    cy.get('article')
  })
  it('si podemos navegar con la nacbar a la home', () => {
    cy.visit('/pet/3')
    cy.get('nav a')
      .first()
      .click()
    cy.url().should('include', '/')
  })

  it('los usuarios no registrados ven el formulario de registro e iniciio de sesion al ir a favs', () => {
    cy.visit('/favs')
    cy.get('form').should('have.length', 2)
  })
})
