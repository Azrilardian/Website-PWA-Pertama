const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
	mode: "development",
	module: {
		rules: [
			{
				test: /\.(png|svg|jpg|jpeg)$/,
				use: {
					loader: "file-loader",
					options: {
						name: "[name].[ext]",
						outputPath: "img",
					},
				},
			},
		],
	},
});
