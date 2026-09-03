import "dotenv/config";

export const baseConfig: Omit<WebdriverIO.Config, "capabilities"> = {
  specs: ["./test/specs/**/*.ts"],
  exclude: [],
  maxInstances: 1,
  logLevel: "info",
  bail: 0,
  waitforTimeout: 15000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 2,
  framework: "mocha",
  reporters: ["spec"],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
