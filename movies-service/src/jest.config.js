module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    "\\\\node_modules\\\\"
  ],
  coverageProvider: "v8",
  coverageReporters: [
    "json",
    "text",
    "lcov",
    "clover"
  ],
  moduleDirectories: [
    "node_modules"
  ],
  moduleFileExtensions: [
    "js",
    "mjs",
    "cjs",
    "jsx",
    "ts",
    "tsx",
    "json",
    "node"
  ],

  // moduleNameMapper: {},
  // modulePathIgnorePatterns: [],

  rootDir: '.',

  // roots: [
  //   "<rootDir>"
  // ],

  setupFiles: ["dotenv/config"],
  testEnvironment: "jest-environment-node",
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  testPathIgnorePatterns: [
    "\\\\node_modules\\\\"
  ]
};
