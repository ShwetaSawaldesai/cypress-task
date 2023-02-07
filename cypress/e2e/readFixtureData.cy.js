/// <reference types="cypress" />

describe('read data from fixture files', () => {
    // it('read data from orangehrm file present in fixture folder', () =>{
    //     cy.visit("https://opensource-demo.orangehrmlive.com/");
    //     cy.fixture('orangehrm').then((data) =>{
    //         cy.get("input[name='username']").type(data.username);
    //         cy.get("input[name='password']").type(data.password);
    //         cy.get("button[type='submit']").click();
    //         cy.get('.oxd-topbar-header-title').contains('Dashboard');
    //     })
    // })

    //To read the fixture values we have to defind it in before hook as below
    let userData;
    before('read fixture data', () =>{
        cy.fixture('orangehrm').then((data) =>{
            userData = data;
        })
    })

    it('read data from before hook', () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        cy.fixture('orangehrm').then((data) =>{
            cy.get("input[name='username']").type(userData.username);
            cy.get("input[name='password']").type(userData.password);
            cy.get("button[type='submit']").click();
            cy.get('.oxd-topbar-header-title').contains(userData.expectedValue);
        })
    })
})