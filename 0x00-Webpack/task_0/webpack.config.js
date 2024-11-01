const path = require('path');

module.exports = {
  entry: './src/index.js', // Your entry point
  output: {
    filename: 'bundle.js', // The output bundle
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  mode: 'development', // Change to 'production' for production builds
};

