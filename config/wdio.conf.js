exports.config = {
    runner: 'local',
    
    port: 4723,
    specs: [
        '../test/**/*.js'
    ],
    maxInstances: 1,
    capabilities: [{
        "deviceName": process.env.DEVICE || "CUUGRWTW4TNF4DDQ",
        "platformName": process.env.PLATFORM_NAME || "android",
        "platformVersion": process.env.PLATFORM_VARSION || "10",
        "automationName": "UiAutomator2",
        "app": process.env.APP_PATH || `${__dirname}\\..\\Android-NativeDemoApp-0.4.0.apk`,
        "appWaitActivity": "*"
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 1,
    services: [
        ['appium', {
            logPath: './'
        }]
    ],
    framework: 'mocha',
    reporters: ['spec',['allure', {outputDir: 'allure-results'}]],
    mochaOpts: {
        ui: 'tdd',
        timeout: 360000
    },
    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        await browser.takeScreenshot()
        await $('//*[@content-desc="Home"]').click()
    },
}
