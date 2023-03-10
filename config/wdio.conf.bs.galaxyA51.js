import { config as conf } from './wdio.conf.parallel.devices.js'


export const config = {
    ...conf,
    capabilities: [{
      project: "First Webdriverio Android Project",
      build: `Webdriverio Android Demo App ${new Date().toJSON()}`,
      device: 'Samsung Galaxy A51',
      os_version: "10.0",
      app: process.env.BROWSERSTACK_APP_ID || 'bs://faf70eba032251581a1e2e05f5e7f3a7afe3d3f0',
      'browserstack.debug': true
    }],
}
