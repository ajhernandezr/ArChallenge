const commands = require('../../support/commands')

// Web elements
const supplierCountriesElement = 'span[data-testid="multiSelectFilter-listItem-label"]'
const numberFillElement = '#outlined-number'

// Using Cypress Locator, ask better Ids for this section or use Xpath
const partialAllocationElement =  ':nth-child(4) > .sc-htOauJ > .MuiButtonBase-root > .MuiIconButton-label > .jss32'
const  filterEachAllElement = '.sc-hgAmge > :nth-child(3) > .sc-kGNyvp > .MuiButtonBase-root'
const supplierLimitElement = ':nth-child(1) > .sc-kGNyvp > .MuiButtonBase-root'

// Locating elements through the text, because there are not well defined ids, talk with devs in order to implement some
const generalSettings = 'General Settings'
const numberSuppliers = 'Number of Suppliers'
const limitSpend = 'Limit Spend'
const countrySupplierList = 'Country'
const addButton = 'Add'
const limitSupplier = 'Supplier'

// Assertion element and text
const titleElement = 'h5'
const scenarioSettingsText = 'Scenario Settings'
const numberSuppliersText = 'Do you want to limit the number of winning suppliers?'
const limitSpendText = 'Do you want to limit the spend per supplier?'


class CreateNewScenarioPage {

    clickGeneralSettings() {
        cy.clickElementContains(generalSettings)
        cy.assertElementContains(titleElement,scenarioSettingsText);
    }

    clickNumberSuppliers() {
          cy.clickElementContains(numberSuppliers)
           cy.assertElementContains(titleElement,numberSuppliersText);
        }

   clickLimitSpend() {
          cy.clickElementContains(limitSpend)
           cy.assertElementContains(titleElement,limitSpendText);
        }
}

class GeneralSettingsPage {

    selectPartialAllocation() {
        cy.clickElement(partialAllocationElement)
    }

}

class NumberSuppliersPage {

    selectCountriesCheckboxes(countryList) {
    cy.clickElementContains(countrySupplierList)
      cy.wrap(countryList).each((item,index,list) =>
            {
            cy.clickElementContains(countryList[index])
            })
    }

    writeNumberOfSuppliers(NumberOfSuppliers) {
        cy.typeText(numberFillElement,NumberOfSuppliers)
    }

   addSuppliers(){
   cy.clickElementContains(addButton)
   }
}


class LimitSpendPage {

    selectSupplier(supplier){
    cy.clickElement(supplierLimitElement)
    cy.clickElementContains(supplier)
    }

    writeLimitSpend(LimitSpend) {
        cy.typeText(numberFillElement,LimitSpend)
    }

    selectEachAllFilterOption(FilterOption) {
            cy.clickElement(filterEachAllElement)
            cy.clickElementContains(FilterOption)

        }

   addLimit(){
   cy.clickElementContains(addButton)
   }
}


export const CreateNewScenarioPageEx = CreateNewScenarioPage;
export const GeneralSettingsPageEx = GeneralSettingsPage;
export const NumberSuppliersPageEx = NumberSuppliersPage;
export const LimitSpendPageEx = LimitSpendPage;