const path = require('path');

module.exports = {
  entry: './js/dashboard_main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Ensure both loaders are used
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.css'], // Resolve both .js and .css
  },
};

