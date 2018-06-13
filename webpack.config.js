const path = require('path');

module.exports = {
  entry: 'index.js',
  output: {
    filename: 'build/bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};