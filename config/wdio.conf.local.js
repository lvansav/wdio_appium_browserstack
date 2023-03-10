import path from 'path';
import { config as conf } from './wdio.conf.parallel.devices.js'


export const config = {
    ...conf,
    runner: 'local',
    
    port: 4723,
    maxInstances: 1,
    capabilities: [{
        "deviceName": process.env.DEVICE || "CUUGRWTW4TNF4DDQ",
        "platformName": process.env.PLATFORM_NAME || "android",
        "platformVersion": process.env.PLATFORM_VARSION || "10",
        "automationName": "UiAutomator2",
        "app": process.env.APP_PATH || `${path.resolve()}\\Android-NativeDemoApp-0.4.0.apk`,
        "appWaitActivity": "*"
    }],

    services: [
        ['appium', {
            logPath: './'
        }]
    ],

    beforeTest: async function() {},

    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        await browser.takeScreenshot()
    },
}
