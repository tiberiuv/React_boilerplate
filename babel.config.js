module.exports = function(api) {
    const isTest = api.env('test')
    const presetEnvConfig = !isTest
        ? {
              targets: 'last 2 versions',
              modules: false,
          }
        : {
              targets: {
                  node: 'current',
              },
          }
    api.cache(true)

    return {
        presets: [
            ['@babel/preset-env', presetEnvConfig],
            ['@babel/preset-react'],
            ['@babel/typescript', {allExtensions: true, isTSX: true}],
            ['@emotion/babel-preset-css-prop'],
        ],
        plugins: [
            'emotion',
            '@babel/plugin-syntax-dynamic-import',
            '@babel/plugin-proposal-object-rest-spread',
            '@babel/plugin-proposal-export-default-from',
            '@babel/plugin-proposal-optional-chaining',
            '@babel/plugin-proposal-class-properties',
        ],
    }
}
