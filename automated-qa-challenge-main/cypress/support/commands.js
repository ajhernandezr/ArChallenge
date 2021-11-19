

Cypress.Commands.add('clickElement', (elementLocator) => {
    cy.get(elementLocator, {timeout: 5000}).scrollIntoView().click(({force: true}))
});

Cypress.Commands.add('clickFirstElement', (elementLocator) => {
    cy.get(locators[elementLocator]).eq(0).click()
});

Cypress.Commands.add('focusFirstElement', (elementLocator) => {
    cy.get(locators[elementLocator]).eq(0).focus()
});

Cypress.Commands.add('mouseOverElement', (elementLocator) => {
    cy.get(locators[elementLocator]).eq(0).trigger('mouseover')
});

Cypress.Commands.add('clickElementContains', (elementLocator) => {
    cy.contains(elementLocator,{timeout: 9000}).scrollIntoView().click(({force: true}))
});
Cypress.Commands.add('typeText', (elementLocator, text) => {
    cy.get(elementLocator).eq(0).scrollIntoView().type(text, {force: true});
});
Cypress.Commands.add('assertElement', (elementLocator, text) => {
    cy.get(locators[elementLocator]).should('be.visible', {timeout: 5000});
});
Cypress.Commands.add('assertElementNotVisible', (elementLocator, text) => {
    cy.get(locators[elementLocator]).should('not.be.visible');
});

Cypress.Commands.add('assertElementContains', (elementLocator, text) => {
    cy.get(elementLocator).should('contain', text, {timeout: 5000});
});