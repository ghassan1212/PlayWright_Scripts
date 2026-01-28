const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests', // folder containing your test files
  reporter: [['allure-playwright']], // generates allure-results
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
  },
});