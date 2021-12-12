const optionsArr = ["CHANGE GROUP", "Group by Function", "Group by Role"];

// Web Elements
export const companyLogo = () => cy.findByRole("img", { name: "Syndio" });
export const header = () => cy.get('.header')

export const dropdown = () => cy.get('#dropdown-button');
export const optionsList = () => cy.get('ul.optionsList');

export const optionGroupByRole = () => cy.contains('Group by Role');
export const optionGroupByFunction = () => cy.contains('Group by Function')

// Actions
// this checkes if dropdown lists have all the options with expected length
export const verifyOptionsList = () => {
    optionsArr.forEach(item => cy.contains('.dropdown > ul > li', item))
    cy.get('.dropdown > ul > li').should('have.length', `${optionsArr.length}`)
}