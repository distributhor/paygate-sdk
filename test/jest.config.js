module.exports = {
  automock: false,
  clearMocks: true,
  testEnvironment: "node",
  testMatch: ["**/unit/?(*.)+(spec|test).[t]s?(x)"],
  transform: { "^.+\\.tsx?$": "ts-jest" },
};
