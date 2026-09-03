/* import 'dotenv/config';

export const config: WebdriverIO.Config = {
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,

    hostname: 'hub.browserstack.com',
    specs: [
        './test/specs/**.ts'
    ],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
        'bstack:options': {
            projectName: 'Mobile Automation Internship',
            buildName: 'Android Native App Tests',
            sessionName: 'Appium Native Test Run',
            debug: true,
            networkLogs: true
        },
        platformName: 'android',
        'appium:platformVersion': '12.0',
        'appium:deviceName': 'Samsung Galaxy S22',
        'appium:automationName': 'UiAutomator2',
        'appium:app': process.env.BROWSERSTACK_APP_ID
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 15000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 2,
    services: ['browserstack'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}*/

import { config as bstackConfig } from "./wdio.browserstack.conf";

export const config: WebdriverIO.Config = bstackConfig;