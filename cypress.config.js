const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    baseUrl: 'https://automationteststore.com',
    watchForFileChanges: false, //відкоючаю автоматичне оновлення в ранері
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
