// Web Elements
export const tabGender = () => cy.get('#tab-gender > .tab')
export const tabRace = () => cy.get('#tab-race > .tab')
export const tabDemographics = () => cy.get('.demographicsTab > .demographicStats')
export const tabList = () => cy.get('.tabList')


// Actions
// Check Gender & Race tabs Since we don't know the content fo Race tab, We will just test its active-inactive functionality
// and a user shouldn't see the words, 'Women' and 'Men'under Race(This is just assumption. In a real life, I would ask devs or ticket/story first to verify)
export const CheckTopMenu = () => {
    tabGender().should('have.class', 'tab-active');
    cy.contains('Women').should('be.visible');
    cy.contains('Men').should('be.visible')
    tabRace().should('have.class', 'tab-inactive').click({ force: true });
    tabRace().should('have.class', 'tab-active');
    cy.contains('Women').should('not.be.visible');
    cy.contains('Men').should('not.be.visible')
}