module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: ["<rootDir>/src/**/*.spec.js"],
  automock: false,
  // globalSetup: ["<rootDir>/src/tests/unit/setupTests.spec.js"]
}
