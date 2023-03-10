import { config as conf } from './wdio.conf.parallel.devices.js'


export const config = {
    ...conf,
    capabilities: [{
      project: "First Webdriverio Android Project",
      build: `Webdriverio Android Demo App ${new Date().toJSON()}`,
      device: 'Samsung Galaxy A51',
      os_version: "10.0",
      app: process.env.BROWSERSTACK_APP_ID,
      'browserstack.debug': true
    }],
}
