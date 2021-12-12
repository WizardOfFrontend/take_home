/// <reference types="Cypress" />
// Web Eelments
export const id_GroupByRole = () => "f1b01b57-3147-476a-a632-0c10ad2a3c1a";
export const id_GroupFuncton = () => "a9f6a4b7-d03c-4a45-b64b-791e054f36b8";

export const functionEquityContent = "Women earn 96¢ for every $1 earned by comparable Men";
export const functionEmployeeContent = "Women make up 41% of employees";
export const functionBudgetContent = "$235,000 minimum recommended budget to reduce pay equity gap";

export const roleEquityContent = "Men earn 97¢ for every $1 earned by comparable Women";
export const roleEmployeeContent = "Men make up 47% of employees";
export const roleBudgetContent = "$135,000 minimum recommended budget to reduce pay equity gap";

// Labels
export const label_PayEquityBy = () => cy.get('#payEquityGap > label');
export const label_EmployeesInComparison = () => cy.get('#employeeComparison > label');
export const label_Budget = () => cy.get('#budget > label');

// Contents
export const contents_PayEquityBy = (option) => {
    return option === "function"
        ? cy.contains('#payEquityGap', functionEquityContent)
        : cy.contains('#payEquityGap', roleEquityContent);
}
export const contents_EmployeesInComparison = (option) => {
    return option === "function"
        ? cy.contains('#employeeComparison', functionEmployeeContent)
        : cy.contains('#employeeComparison', roleEmployeeContent);
}
export const contents_Budget = (option) => {
    return option === "function"
        ? cy.contains('#budget', functionBudgetContent)
        : cy.contains('#budget', roleBudgetContent);
}

export const errorMsg = () => cy.findByText('Error retrieving requested demographic statistics.', { timeout: 5000 })

export const demoContent = () => cy.get('div.content');


// Actions
// check the labels and contents are visible
export const checkLabelsAndContents = (option) => {
    label_PayEquityBy().should('exist');
    label_EmployeesInComparison().should('exist');
    label_Budget().should('exist');

    // check the contents
    contents_PayEquityBy(option).should('be.visible');
    contents_EmployeesInComparison(option).should('be.visible');
    contents_Budget(option).should('be.visible');
}

// Check the error message and its position
export const checkErrorMsg = () => {
    errorMsg()
        .should('be.visible')
        .and('have.css', 'justify-content', 'center')
}