const path = require('path');


module.exports = {
  entry: './frontend/entry.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'wpk.js'
  },
  resolve: {
   extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          query: {
                presets: ['react', 'env']
            }
        }
      }
    ]
  },
  devtool: 'source-map'
};
