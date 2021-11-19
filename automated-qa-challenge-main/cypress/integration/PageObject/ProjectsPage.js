const commands = require('../../support/commands')

const scenarioTabElement = '[data-testid=scenarioTab]'
const scenarioComparisonElement = 'div'
const projectElement = 'div'
const projectElementText = 'projects'


class ProjectsPage {

    navigateToProjectPage() {
        cy.visit('/projects');
        // UI should reflect this user being logged in
        cy.assertElementContains(projectElement,projectElementText);

    }

    clickOnProject(dashboardProject) {
    cy.clickElementContains(dashboardProject);
    }

    clickScenarioTab() {
        cy.clickElement(scenarioTabElement)
    }
}

export const ProjectsPageEx = ProjectsPage;