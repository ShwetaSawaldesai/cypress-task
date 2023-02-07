/// <reference types="cypress" />
describe('data driven', () =>{
    it('read multiple sets of data', () =>{
        cy.fixture('orangehrm2').then((data) =>{
            cy.visit("https://opensource-demo.orangehrmlive.com/");
            data.forEach((userData) => {
             cy.get("input[name='username']").type(userData.username);
             cy.get("input[name='password']").type(userData.password);
             cy.get("button[type='submit']").click();
             
             if(userData.username == "Admin" && userData.password == "admin123"){
                cy.get('.oxd-topbar-header-title').contains(userData.expectedValue);
                cy.get('.oxd-userdropdown-tab>.oxd-icon').click();
                cy.wait(3000);
                cy.get('.oxd-dropdown-menu>li:nth-child(4)').click();
             }else{
                cy.get('.oxd-alert-content-text').should('have.text', userData.expectedValue);
             }   
            });
        })
    })
})