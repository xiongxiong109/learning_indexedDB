var path = require('path');
module.exports = {
	entry: {
		'app': './src/app.js'
	},
	output: {
		filename: '[name].bundle.js',
		path: path.join(__dirname, '/dist'),
		publicPath: '/public/',
	},
	devServer: {
		port: 8080,
		inline: true,
		hot: true
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
}