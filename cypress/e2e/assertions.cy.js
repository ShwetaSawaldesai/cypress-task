/// <reference types="cypress" />
describe('Verify implicit and explicit assertions', () =>{

    it.skip('implicit assertions', () =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        //Way 1 to write
        // cy.url().should('include', 'orangehrmlive.com');
        // cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        // cy.url().should('contain', 'orangehrmlive');

        //Way 2 to write
        // cy.url().should('include', 'orangehrmlive.com')
        //         .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //         .should('contain', 'orangehrmlive');
        //using and
        cy.url().should('include', 'orangehrmlive.com')
                .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
                .and('contain', 'orangehrmlive')
                .and('not.contain', 'greenhrm');
        //To verify title
        cy.title().should('include', 'Orange').and('eq', 'OrangeHRM')
            .and('contain', 'HRM')
        //To verify element is present or not
        cy.get('.orangehrm-login-branding img').should('be.visible')
          .and('exist')
        //To verify number of links present on the homepage
        cy.get('a').should('have.length', '5');
        //Verify text passed in the text box
        cy.get('input[name = "username"]').type('Hello');
        cy.get("input[name = 'username']").should('have.value', 'Hello');
    });

    it('explicit assertions', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('input[name = "username"]').type('Admin');
        cy.get('input[name = "password"]').type('admin123');
        cy.get("button[type='submit']").click();
        let expName = 'Prasad Collings';

        cy.get('.oxd-userdropdown-tab').then((x) =>{
            let actName = x.text()
            //BDD assertions
            expect(actName).to.equal(expName);
            expect(actName).to.not.equal("name");

            //TDD assetions
            assert.equal(actName, expName)
            assert.notEqual(actName, 'Hello')

        })
    })


})