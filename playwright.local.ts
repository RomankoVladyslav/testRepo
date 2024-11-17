export {};
const testName = process.env.TEST_NAME;

const config = {
  name: "e2e",
  use: {
    headless: false,
  },
  testDir: './tests',
  testMatch: [`${testName}.ts`],
  timeout: 200000,
};
module.exports = config;