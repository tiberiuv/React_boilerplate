module.exports = {
    setupFilesAfterEnv: ['./node_modules/jest-enzyme/lib/index.js'],
    transform: {
        '^.+\\.[t|j]sx?$': 'babel-jest',
    },
    setupFiles: ['<rootDir>/testUtils/testSetup.js'],
    testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/'],
}
