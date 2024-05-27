const androidLocators = require('../locators/androidLocators.js');
const iosLocators = require('../locators/iosLocators.js');

const allLocators = {
  ...androidLocators,
  ...iosLocators,
};


function getElementByString(elementString) {
    const locator = allLocators[elementString];
    if (locator) {
      return $(locator);
    } else {
      throw new Error(`Locator not found for element: ${elementString}`);
    }
  }
  
  module.exports = getElementByString;
  