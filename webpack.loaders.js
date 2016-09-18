module.exports = [
	{
		test: /\.jsx?$/,
		exclude: /(node_modules|bower_components|public)/,
		loaders: ['react-hot']
	},
	{
		test: /\.jsx?$/,
		exclude: /(node_modules|bower_components|public)/,
		loader: 'babel',
		query: {
		  presets: ['es2015', 'react'],
		  plugins: ['transform-runtime', 'transform-decorators-legacy', 'transform-class-properties'],
		}
	},
  { test: /\.css$/, loader: 'style-loader!css-loader' },
  { test: /\.svg$/, loader: 'url-loader?mimetype=image/svg+xml' },
  { test: /\.woff$/, loader: 'url-loader?mimetype=application/font-woff' },
  { test: /\.woff2$/, loader: 'url-loader?mimetype=application/font-woff' },
  { test: /\.eot$/, loader: 'url-loader?mimetype=application/font-woff' },
  { test: /\.ttf$/, loader: 'url-loader?mimetype=application/font-woff' },
  {
		test: /\.gif/,
		exclude: /(node_modules|bower_components)/,
		loader: "url-loader?limit=10000&mimetype=image/gif"
	},
	{
		test: /\.jpg/,
		exclude: /(node_modules|bower_components)/,
		loader: "url-loader?limit=10000&mimetype=image/jpg"
	},
	{
		test: /\.png/,
		exclude: /(node_modules|bower_components)/,
		loader: "url-loader?limit=10000&mimetype=image/png"
	}
];
