var assert = require('assert');


class Helper {

  async waitSecond(sleepInSeconds) {
    await driver.pause(10000);
  }

  async openApp() {
    if ( DATA.TEST_SETTINGS.platform === "android") {
      driver.launchApp(DATA.APP.android);
    } else if( DATA.TEST_SETTINGS.platform === "ios"){
      driver.launchApp(DATA.APP.ios);
    }
  }


  async closeApp() {
    if ( DATA.TEST_SETTINGS.platform === "android") {
      driver.terminateApp(DATA.APP.android);
    } else if( DATA.TEST_SETTINGS.platform === "ios"){
      driver.terminateApp(DATA.APP.ios);
    }
  }

}

module.exports = new Helper();
