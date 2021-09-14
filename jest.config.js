module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: ["<rootDir>/src/**/*.spec.js"],
  automock: true,
  setupFilesAfterEnv: [
      "<rootDir>/tests/unit/setupTests.js"
  ],
  // moduleNameMapper: {
  //   // node_modules: "<rootDir>/node_modules",
  //   "^vue$": "vue",
  //   "^vuex$": "vuex",
  // },
  unmockedModulePathPatterns: [
      "<rootDir>/node_modules/vue",
    "<rootDir>/node_modules/vuex"

  ]


  // globalSetup: ["<rootDir>/src/tests/unit/setupTests.js"]
}
