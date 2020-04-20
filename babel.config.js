module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    development: {
      plugins: [
        [
          'module-resolver',
          {
            root: ['./src'],
            alias: {
              '@components': './src/components',
              '@constants': './src/constants',
              '@helpers': './src/helpers',
              '@redux': './src/redux',
              '@screens': './src/screens',
              '@src': './src',
            },
          },
        ],
      ],
    },
  },
};
