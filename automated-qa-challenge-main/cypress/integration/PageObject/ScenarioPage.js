const commands = require('../../support/commands')

const scenarioComparisonElement = 'div'
const scenarioComparisonText = 'Scenario Comparison'
const addScenarioButton = 'Add Scenario'

class ScenarioDashboardPage {


    scenarioHome() {
    cy.assertElementContains(scenarioComparisonElement,scenarioComparisonText);

    }
    addScenario() {
    cy.clickElementContains(addScenarioButton);
    }
}

export const ScenarioDashboardPageEx = ScenarioDashboardPage;

