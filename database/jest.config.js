module.exports = {
  roots: ["<rootDir>/src/__tests__"],
  testMatch: ["**/*.test.ts"],
  preset: "ts-jest",
  testEnvironment: "node",
  testTimeout: 30000,
  verbose: true,
  silent: false,
  testPathIgnorePatterns: ["<rootDir>/build/", "<rootDir>/node_modules/"],
};
