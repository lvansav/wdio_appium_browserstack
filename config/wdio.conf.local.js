import path from 'path';


export const config = {
    runner: 'local',
    
    port: 4723,
    specs: [
        '../test/**/*.js'
    ],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
        "deviceName": process.env.DEVICE || "CUUGRWTW4TNF4DDQ",
        "platformName": process.env.PLATFORM_NAME || "android",
        "platformVersion": process.env.PLATFORM_VARSION || "10",
        "automationName": "UiAutomator2",
        "app": process.env.APP_PATH || `${path.resolve()}\\Android-NativeDemoApp-0.4.0.apk`,
        "appWaitActivity": "*"
    }],
    logLevel: 'info',
    coloredLogs: true,
    bail: 0,
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    specFileRetries: 2,
    specFileRetriesDelay: 30,
    services: [
        ['appium', {
            logPath: './'
        }]
    ],
    framework: 'mocha',
    reporters: ['spec',['allure', {outputDir: './allure-results'}]],
    mochaOpts: {
        ui: 'tdd',
        timeout: 360000
    },
    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        await browser.takeScreenshot()
    },
}
