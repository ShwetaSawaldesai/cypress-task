/// <reference types="cypress" />
import { homePageElements } from "../fixtures/homePage";

describe('add book and empty cart', () => {
    beforeEach('visit the url', () =>{
    cy.request('/user/sign_in').as('signIn');
    cy.visit('/')
     cy.get('#logo').should('be.visible')
     
    });

    it('search and add book to cart', () =>{
        // cy.visit('/user/sign_in');
        
        cy.login(Cypress.env('username'), Cypress.env('password'));
        //Captcha
        // cy.get('#auth-captcha-image').should('exist');
        //Verify user landed on home page
        cy.get('.siteHeader__logo').should('have.attr','title', homePageElements.logoText);
        cy.get('.searchBox__input').eq(1).should('be.enabled').type('The Lost Painting {enter}')

    });
});