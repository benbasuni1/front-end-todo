module.exports = {
  entry: './app.js',
  output: {
    filename : 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test    : /\.js$/,
        exclude : /node_modules/,
        loader : 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
}
