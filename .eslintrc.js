module.exports = {
    // parser: 'babel-eslint',
    parser: '@typescript-eslint/parser',
    plugins: ['babel', 'react', 'react-hooks', '@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    parserOptions: {
        ecmaVersion: 2018,
        ecmaFeatures: {
            jsx: true,
        },
        sourceType: 'module',
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
    },
    env: {
        node: true,
        browser: true,
        amd: true,
        jest: true,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        '@typescript-eslint/explicit-function-return-type': [
            'off',
            {
                allowExpressions: true,
                allowTypedFunctionExpressions: false,
            },
        ],
    },
}
