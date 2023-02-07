describe('radio button and check boxes', () =>{
    it('radio button', () => {
        cy.visit('https://itera-qa.azurewebsites.net/home/automation');
        //Verify radio buttons are visible on the page
        cy.get('#female').should('be.visible');
        cy.get('#male').should('be.visible');
        //Select female radio button and check if it is checked and male radio button is unchecked.
        cy.get('#female').check().should('be.checked');
        cy.get('#male').should('not.be.checked');
        //Select male radio button and verify it is checked and female radio button is unchecked.
        cy.get('#male').check().should('be.checked');
        cy.get('#female').should('not.be.checked');
    })

    it('check boxes', () =>{
        cy.visit('https://itera-qa.azurewebsites.net/home/automation');
        //Select single checkbox
        cy.get('#monday').check().should('be.checked');

        //To uncheck the selected checkbox
        cy.get('#monday').uncheck().should('not.be.checked');

        //To check all the checkboxes at a time
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked');

        //To uncheck all checkboxes
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked');

        //To select first and last checkbox
        cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked');
        cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked');
    })
})