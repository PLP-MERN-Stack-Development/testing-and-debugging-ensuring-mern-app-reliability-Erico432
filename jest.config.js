module.exports = {
  projects: ['<rootDir>/client', '<rootDir>/server'],
  collectCoverageFrom: [
    'client/src/**/*.{js,jsx}',
    'server/src/**/*.{js}',
    '!**/node_modules/**'
  ],
  coverageThreshold: {
    global: { branches: 70, functions: 70, lines: 70, statements: 70 }
  }
};
