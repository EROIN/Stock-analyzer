module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svgMocks.ts',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/svgrMock.ts',
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!<rootDir>/node_modules/'],
  coverageThreshold: {
    // global: {
    //   lines: 40,
    //   statements: 42,
    //   branch: 68,
    //   functions: 45,
    // },
    // TODO: Change it back after adding test-cases for all other modules
    global: {
      lines: 10,
      statements: 10,
      branch: 10,
      functions: 10,
    },
  },
  coveragePathIgnorePatterns: [
    'node_modules',
    'test-config',
    'interfaces',
    'jestGlobalMocks.ts',
    '.styles.ts',
    '.types.ts',
    'index.ts',
    '<rootDir>/App.tsx',
    '<rootDir>/reportWebVitals.ts',
    '<rootDir>/setupTests.js',
    '<rootDir>/src/constants/',
    '<rootDir>/src/redux/',
    '<rootDir>/src/routes/',
    '<rootDir>/src/types/',
    '<rootDir>/src/__mocksData__/',
    '<rootDir>/src/utils/api.utils.ts',
    '.mock.ts',
  ],
};
