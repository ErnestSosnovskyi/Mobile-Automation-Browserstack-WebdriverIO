import { baseConfig } from "./wdio.shared.conf";

export const config: WebdriverIO.Config = {
  ...baseConfig,
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,
  hostname: "hub.browserstack.com",
  services: ["browserstack"],
  capabilities: [
    {
      "bstack:options": {
        projectName: "Mobile Automation Internship",
        buildName: "Android Native App Tests",
        sessionName: "Appium Native Test Run",
        debug: true,
        networkLogs: true,
      },
      platformName: "android",
      "appium:platformVersion": "12.0",
      "appium:deviceName": "Samsung Galaxy S22",
      "appium:automationName": "UiAutomator2",
      "appium:app": process.env.BROWSERSTACK_APP_ID,
    },
  ],
};
