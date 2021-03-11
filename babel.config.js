module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.js', '.ts', '.tsx', '.ios.js', '.android.js'],
        root: ['./src'],
        alias: {
          '@': './src',
        },
      },
    ],
  ],
};
