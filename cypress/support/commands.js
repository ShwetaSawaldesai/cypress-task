// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="cypress" />
import { loginPage } from "../fixtures/loginPage";


Cypress.Commands.add('login', (email, password) => {
    cy.request('/user/sign_in');
    cy.request('/admin').its('body').should('include', 'Signin')
    cy.get('#signIn').contains('Sign In').click();
    cy.get('.authPortalSignInButton').contains(loginPage.signInWithEmail).click();
    cy.get('h1').contains(loginPage.signIn);
    cy.get('#ap_email').type(email);
    cy.get('#ap_password').type(password);
    cy.get('#signInSubmit').click();
});
