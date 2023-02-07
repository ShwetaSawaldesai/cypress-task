/// <reference types="cypress" />
describe('table cols rows and data', () => {

    beforeEach('login and navigate up to customers page', () => {
        cy.visit('https://demo.opencart.com/admin/');
        cy.get('#input-username').type('demo');
        cy.get('#input-password').type('demo');
        cy.get('button[type="submit"]').click();

        //Close the alert box
        cy.get('.btn-close').click();

        //Navigate to customer menu
        cy.get('#menu-customer').click();
        cy.get('#menu-customer>ul>li:first-child').click();
    })

    it('verify number of rows and cols in the table', () => {
        //Verify number of rows in the table
        cy.get("table[class='table table-bordered table-hover']> tbody>tr").should('have.length', 10);
        //Number of cols in the table
        cy.get("table[class='table table-bordered table-hover']> thead>tr>td").should('have.length', 7)
    })

    it('read data from specific cell', () =>{
        //Verify the value princytrainings4@gmail.com from 5th row and 3col
        cy.get('table>tbody>tr:nth-child(5)>td:nth-child(3)')
        .contains('princytrainings4@gmail.com')
    })

    it('read data from each row and cols in the table on frist page', () =>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
        .each(($row, index, $rows) =>{
            cy.wrap($row).within(() =>{
                cy.get("td").each(($col, index, $cols) => {
                    cy.log($col.text());
                })
            })
        })
    });
     
    it.only('pagination', () =>{

        //Get the total number of pages
        // cy.get('col-sm-6 text-end').then((e) =>{
        //     let myText = e.text();
        //     let totalPages = myText.substring(myText.indexOf("(")+1, myText.indexOf("Pages")-1);
        //     cy.log('Total number of pages '+totalPages);
        // })

        //To read the data from each page.
        let totalPages = 5;
        for(let p=1; p<totalPages; p++){
            cy.log('Current page is '+p);
            cy.get("ul[class='pagination']>li:nth-child("+p+")").click();

            cy.get("table[class='table table-bordered table-hover']>tbody>tr")
             .each(($row, index, $rows) =>{
                cy.wrap($row).within(() =>{
                  cy.get("td:nth-child(3)").then((e) =>{
                    cy.log(e.text());
                })
            })
         })
       }
    })
})