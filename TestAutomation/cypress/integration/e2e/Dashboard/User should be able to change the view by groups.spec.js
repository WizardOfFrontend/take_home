/// <reference types="Cypress" />
import * as HeaderComponent from '../../../components/Header';
import * as DemographicStatsComponent from '../../../components/DemographicStats';

const sizes = [[1920, 1080], "macbook-16", "ipad-2", "iphone-8"]

describe('', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    sizes.forEach(size => {
        it(`A user can see the result using Group by Role on ${size}`, () => {
            if (Cypress._.isArray(size)) {
                cy.viewport(size[0], size[1]);
            } else {
                cy.viewport(size);
            }
            // Check the active dropdown has the correct border properties and options list should be visible. 
            // Once a user clicks outside the dropdown list, the options list should be disappeared.    
            HeaderComponent
                .dropdown()
                .click()
                .should('have.class', 'active')
                // short-hand ()('have.css', 'border', '1px solie rgb(13, 139, 127)') format doesn't work for Firefox.
                .and('have.css', 'border-top-color', 'rgb(13, 139, 127)')
                .and('have.css', 'border-bottom-color', 'rgb(13, 139, 127)')
                .and('have.css', 'border-left-color', 'rgb(13, 139, 127)')
                .and('have.css', 'border-right-color', 'rgb(13, 139, 127)')
                .and('have.css', 'border-top-style', 'solid')
                .and('have.css', 'border-bottom-style', 'solid')
                .and('have.css', 'border-left-style', 'solid')
                .and('have.css', 'border-right-style', 'solid')
                .and('have.css', 'border-top-width', '1px')
                .and('have.css', 'border-bottom-width', '1px')
                .and('have.css', 'border-left-width', '1px')
                .and('have.css', 'border-right-width', '1px')

            // Check Gender & Race tabs Since we don't know the content for Race tab, We will just test its active-inactive functionality
            // and a user shouldn't see the words, 'Women' and 'Men'under Race(This is just assumption. In a real life, I would ask devs or ticket/story first to verify)
            TabsComponent.CheckTopMenu(); // BUG! ACTIVE-INACTIVE FUNCTIONALITY WORKS, BUT CLICKING A TAB DOESN'T CHANGE THE VIEW.

            HeaderComponent.optionsList().should('be.visible')
            HeaderComponent.header().click({ force: true })
            HeaderComponent.optionsList().should('not.be.visible') // BUG! CLICKING OUTSIDE OF DROPDOWN LIST DOESN'T CLOSE THE DROPDOWN LIST. 

            // Check dropdown list is populated with all the expected values
            HeaderComponent.verifyOptionsList();

            // Change the option to Group by Role and check the url.
            HeaderComponent.optionGroupByRole().click({ force: true });
            cy.url().should('contain', DemographicStatsComponent.id_GroupByRole());
            // BUG! CLICKING 'Group By Role' OPTION IS BROKEN. GETTING groupByFunction ID IN BACKEND. ALSO URL DISPLAYS Group by Function'S GROUPS ID IN URL

            // Check all the labels and contents for GroupByRole
            DemographicStatsComponent.checkLabelsAndContents("role");
            // BUG! CLOSELY RELATED TO THE ABOVE BUG. DISPLAYING Group by Functions'S CONTENT. 
            // BUG! TYPO ('buget' SHOULD READ 'budget')
        })

    });

    sizes.forEach(size => {
        it(`A user can see the result using Group by Function on ${size}`, () => {
            if (Cypress._.isArray(size)) {
                cy.viewport(size[0], size[1]);
            } else {
                cy.viewport(size);
            };
            HeaderComponent.optionGroupByFunction().click({ force: true });
            cy.url().should('contain', DemographicStatsComponent.id_GroupFuncton());

            // Check all the labels and contents for GroupByFunction
            DemographicStatsComponent.checkLabelsAndContents("function"); // BUG! typo. 'buget' should read 'budget'
        })
    });

    it(`Error message should be diplayed for a wrong group id`, () => {
        cy.visit('http://localhost:3000/?group=gghfyuyf');
        DemographicStatsComponent.checkErrorMsg();
    });
    // BUG! - even though it has justify-content: center for a phone, it looks not aligned correctly
});