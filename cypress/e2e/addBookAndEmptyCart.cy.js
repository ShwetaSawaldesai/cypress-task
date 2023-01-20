/// <reference types="cypress" />

describe('add book and empty cart', () => {
    beforeEach('visit the url', () =>{
        cy.visit('/');
        cy.get('#logo').should('be.visible');
    });

    it('is able to login', () =>{
        cy.login(Cypress.env('username'), Cypress.env('password'))
    });
});