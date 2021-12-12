/// <reference types="Cypress" />

import * as HeaderComponent from '../../../components/Header';
import * as TabsComponent from '../../../components/Tabs';
import * as DemographicStatsComponent from '../../../components/DemographicStats';

describe('Layout Tests', () => {
    before(() => {
        cy.visit('/');
        cy.viewport(1092, 1080);
    });
    it('Check the layout of Dashboard based on dashboard-spec ', () => {
        // Header
        HeaderComponent.header()
            .should('have.css', 'height', '70px')
            .and('have.css', 'background-color', 'rgb(55, 55, 55)');

        TabsComponent.tabGender().click();

        // Active Tab
        TabsComponent.tabGender()
            .should('have.css', 'height', '40px') // BUG! ACTUAL IS 41px
            .and('have.css', 'width', '200px')
            .and('have.css', 'background-color', 'rgb(216, 216, 216)') // BUG! ACTUAL IS rgb(248, 248, 248)
            .and('have.css', 'font-size', '14px') // BUG! ACTUAL IS 18.6667px
            .and('have.css', 'color', 'rgb(46, 46, 46)');

        // Inactive Tab
        TabsComponent.tabRace()
            .should('have.css', 'height', '40px') // BUG! ACTUAL IS 41px
            .and('have.css', 'width', '200px')
            .and('have.css', 'background-color', 'rgb(242, 242, 242)') // BUG! ACTUAL IS transparent
            .and('have.css', 'font-size', '14px') // BUG! ACTUAL IS 18.6667px
            .and('have.css', 'color', 'rgb(102, 102, 102)');

        // DemographicStats Padding
        DemographicStatsComponent.demoContent()
            .should('have.css', 'padding-left', '24px');

        // Dropdown List
        HeaderComponent.dropdown()
            .should('have.css', 'height', '40px')
            .and('have.css', 'width', '200px')
            .and('have.css', 'background-color', 'rgb(38, 38, 38)')

        // Tab outline 
        TabsComponent.tabList()
            .should('have.css', 'outline', '1px rgb(231, 231, 231)') // BUG! ACTUAL IS Not implemented
    });
});