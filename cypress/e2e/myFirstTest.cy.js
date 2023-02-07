
import { homePageElements } from "../fixtures/homePage";

describe('Test suite', () =>{
    it('verify title -positive test', () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        cy.title().should('eq', 'OrangeHRM')
    });

    it('verify title -negative test', () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        cy.title().should('eq', 'OrangeHRM123')
    });
})