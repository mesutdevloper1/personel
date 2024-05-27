const { Given, When, Then } = require('@cucumber/cucumber');

const Helper = require('../methods/helper.js');
const androidLocators = require('../locators/androidLocators.js');
const iosLocators = require('../locators/iosLocators.js');
const getElementByString = require('../methods/returnElement.js');

const path = require('path');
const settingsPath = path.join(process.cwd(), 'test-settings.js');
const { DATA } = require(settingsPath);



Given(/^click "(.*)"/, async (elementString) => {
  const element = getElementByString(elementString);
  await element.click();
});


Given(/^wait (.*) second$/, async (second) => {
    return Helper.waitSecond(second);
});


Given(/^open app$/, () => {
   return Helper.openApp();
});


Given(/^close app$/, () => {
  return Helper.closeApp();
});



Given(/^I tap that element (.*)$/, (element) => {
  
});


Given(/^I should see that element (.*) to be displayed$/, (checkElement) => {
    return LoginScreen.expectElementDisplayed(checkElement);
});


    @When("Kullanıcı girişi yapılır")
    public void kullaniciGirisiYapilir() {
        loginPage.login("username", "password");
    }

    @Then("Kullanıcı girişi yapıldığı doğrulanır")
    public void kullaniciGirisiYapildigiDogrulanir() {
        // Kullanıcı girişinin doğrulandığını kontrol edin
        assertTrue(driver.findElementById("com.hepsiburada:id/account_name").isDisplayed());
    }
