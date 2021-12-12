/// <reference types="Cypress" />

import * as HeaderComponent from '../../../components/Header';
import * as TabsComponent from '../../../components/Tabs';

describe('Loading app test', () => {
    before(function () {
        cy.visit('/');
    })

    it(`Check the default values on dashboard page`, () => {
        // check the company logo
        HeaderComponent.companyLogo().should('be.visible');

        // check dropdown list and its default value
        HeaderComponent.dropdown().should('exist').and('have.text', 'CHANGE GROUP') // BUG! 'CHANGE GROUP' IS NOT A DEFAULT VALUE

        // check the tabs
        TabsComponent.tabGender().should('exist').and('have.class', 'tab-active')
        TabsComponent.tabRace().should('exist').and('have.class', 'tab-inactive')

        // Make sure the 3 cards are visible
        TabsComponent.tabDemographics().should('have.length', '3');
    });
});