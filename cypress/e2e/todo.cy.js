/// <reference types="cypress" />

describe('test recipe site', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234/')
  });

  it('has recipe cards and headings', () => {
    cy.get(`.Recipes__card`)
      .find('.Heading')
      .then($el => (
        expect($el.first()).to.contain('Chocolate Cake')
      ));
  });

  it('cook modal functions', () => {
    cy.get(`.Recipes__card`)
      .find(`.dqpl-button-primary`)
      .first()
      .click()
  });
});