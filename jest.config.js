module.exports = {
    transform: {
        '^.+\\.[t|j]sx?$': 'babel-jest',
    },
    testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/'],
}
