/* global describe,it,cy */

describe('Petgram', () => {
  it('para ver si la app funciona', () => {
    cy.visit('/')
  })

  it('navegamos a una categoria y vemos fotos', () => {
    cy.visit('/pet/2')
    cy.get('article')
  })
})
