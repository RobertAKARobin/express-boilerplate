const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'build.js',
		path: path.resolve(__dirname, 'public')
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'build.css'
		})
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader'
				]
			}
		]
	}
}
