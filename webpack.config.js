module.exports = {
  entry: __dirname + '/jsx/app.jsx',
  output: {
    path: __dirname + "/js/",
    filename: 'bundle.js'
  },
  devtool: '#sourcemap',
  stats: {
   colors: true,
   reasons: true
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader' },
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader']
      }
    ]
  }
}

