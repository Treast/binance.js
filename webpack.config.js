const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'Binance.ts'),
  output: {
    filename: 'Binance.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
    ],
  },
};
