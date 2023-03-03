import { config as conf } from './wdio.conf.local.js';


export const config = {
    ...conf,
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
  
    updateJob: false,
    maxInstances: 2,

    capabilities: [{
        project: "First Webdriverio Android Project",
        build: `Webdriverio Android Demo App ${new Date().toJSON()}`,
        app: process.env.BROWSERSTACK_APP_ID,
        'browserstack.debug': true,
        device: 'Samsung Galaxy S21 Ultra',
        os_version: "11.0",
      }, {
        project: "First Webdriverio Android Project",
        build: `Webdriverio Android Demo App ${new Date().toJSON()}`,
        app: process.env.BROWSERSTACK_APP_ID,
        'browserstack.debug': true,
        device: 'Samsung Galaxy A51',
        os_version: "10.0",
    }],
    services: [],

    beforeTest: async function(test, context) {
        driver.execute(`browserstack_executor: {"action": "setSessionName", "arguments": {"name": "${test.title}"}}`);
    },

    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        await browser.takeScreenshot()
        
        if (!passed) {
            driver.execute(`browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "${error}"}}`);
        } else {
            driver.execute(`browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed"}}`);
        }
    },
}
