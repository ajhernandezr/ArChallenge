/// <reference types="cypress" />

import { login } from '../../utils/login';
import {ProjectsPageEx} from "../PageObject/ProjectsPage"
import {ScenarioDashboardPageEx} from "../PageObject/ScenarioPage"
import {CreateNewScenarioPageEx, NumberSuppliersPageEx,GeneralSettingsPageEx,LimitSpendPageEx} from "../PageObject/CreateScenarioPage"

import data from '../../fixtures/data.json'

  const projectPage = new ProjectsPageEx();
  const dashboardScenarioPage = new ScenarioDashboardPageEx()
  const createScenarioPage = new CreateNewScenarioPageEx()
  const numberSupplierPage = new NumberSuppliersPageEx()
  const generalSettingsPage = new GeneralSettingsPageEx()
  const limitSpendPage = new LimitSpendPageEx()


context('Sample e2e test', () => {

  beforeEach(() => {

    return login(cy);
  });

  it('Scenario 1: At most 2 suppliers', function () {

  projectPage.navigateToProjectPage()
  projectPage.clickOnProject(data.dashboardProject)
  projectPage.clickScenarioTab()

  dashboardScenarioPage.scenarioHome()
  dashboardScenarioPage.addScenario()

  createScenarioPage.clickGeneralSettings()

  generalSettingsPage.selectPartialAllocation()

  createScenarioPage.clickNumberSuppliers()

  numberSupplierPage.selectCountriesCheckboxes(data.countriesSupplierList)
  numberSupplierPage.writeNumberOfSuppliers(data.NumberOfSuppliers)
  numberSupplierPage.addSuppliers()

  });

   it('Scenario 2: At most 10% for Cargill', function () {


    projectPage.navigateToProjectPage()
    projectPage.clickOnProject(data.dashboardProject)
    projectPage.clickScenarioTab()

    dashboardScenarioPage.scenarioHome()
    dashboardScenarioPage.addScenario()

    createScenarioPage.clickLimitSpend()

    limitSpendPage.selectSupplier(data.Supplier)
    limitSpendPage.writeLimitSpend(data.LimitSpend)
    limitSpendPage.selectEachAllFilterOption(data.FilterOption)
    limitSpendPage.addLimit(data.FilterOption)


    });

});