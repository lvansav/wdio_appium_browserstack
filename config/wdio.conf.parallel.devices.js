exports.config = {
    user: process.env.BROWSERSTACK_USERNAME || 'vitanave_F8exmw',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'kAqseesEdkwfryk8vwwP',
  
    updateJob: false,
    specs: [
        '../test/**/*.js'
    ],
    exclude: [],
    maxInstances: 2,

    capabilities: [{
        project: "First Webdriverio Android Project",
        build: `Webdriverio Android Demo App ${new Date().toJSON()}`,
        app: process.env.BROWSERSTACK_APP_ID || "bs://faf70eba032251581a1e2e05f5e7f3a7afe3d3f0",
        'browserstack.debug': true,
        device: 'Samsung Galaxy S21 Ultra',
        os_version: "11.0",
      }, {
        project: "First Webdriverio Android Project",
        build: `Webdriverio Android Demo App ${new Date().toJSON()}`,
        app: process.env.BROWSERSTACK_APP_ID || "bs://faf70eba032251581a1e2e05f5e7f3a7afe3d3f0",
        'browserstack.debug': true,
        device: 'Samsung Galaxy A51',
        os_version: "10.0",
    }],
  
    logLevel: 'info',
    coloredLogs: true,
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
  
    framework: 'mocha',
    reporters: ['spec',['allure', {outputDir: './allure-results'}]],
    mochaOpts: {
      ui: 'tdd',
      timeout: 360000
    },

    beforeTest: async function(test, context) {
        driver.execute(`browserstack_executor: {"action": "setSessionName", "arguments": {"name": "${test.title}"}}`);
    },

    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        await browser.takeScreenshot()
        
        if (!passed) {
            driver.execute(`browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "${error}"}}`);
        } else {
            driver.execute(`browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": "${error}"}}`);
        }
    },
}