import { baseConfig } from "./wdio.shared.conf";

export const config: WebdriverIO.Config = {
  ...baseConfig,
  port: 4723,
  services: ["appium"],
  capabilities: [
    {
      platformName: "Android",
      "appium:automationName": "UiAutomator2",
      "appium:deviceName": "Android Emulator",
      "appium:platformVersion": "12.0",
      "appium:app": process.env.LOCAL_APP_PATH || "./apps/app.apk",
    },
  ],
};
