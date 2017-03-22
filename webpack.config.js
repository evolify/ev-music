var path=require('path');
var HtmlWebpackPlugin=require('html-webpack-plugin');
var CopyWebpackPlugin=require('copy-webpack-plugin');
var APP_PATH = path.resolve(__dirname, 'app');
var SRC_PATH = path.resolve(__dirname, 'src');
module.exports={
	entry:['./src/view/app.js'],
	target:'electron',
	output:{
		path:path.resolve(__dirname,'app'),
		publicPath:path.resolve(__dirname,'app'),
		filename:'view/[name].js'
	},
	module:{
		rules:[
			{
				test:/\.jsx?$/,
				exclude:/node_modules/,
				loader:'babel-loader',
				query:{
					presets:['es2015','stage-0','react'],
                    plugins: [
                        ['import', [{ libraryName: "antd", style: 'css' }]]
                    ]
				}
			},
			{
				test:/\.css$/,
				loader:'style-loader!css-loader'
			},
			{
				test:/\.(jpg|png|gif|svg)$/,
				loader:'url-loader',
				query:{
					limit:8192,
					name:'./view/res/img/[name].[ext]'
				}
			},
			{
				test:/\.(ttf|woff|eot)$/,
				loader:'url-loader',
				query:{
					limit:8192,
					name:'./view/res/font/[name].[ext]'
				}
			}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:__dirname+"/src/view/app.html",
            filename:'view/app.html'
		}),
		new CopyWebpackPlugin([
			{from:path.resolve(SRC_PATH,'main'),to:'main'},
			{from:path.resolve(SRC_PATH,'view/res/iconfont'),to:'view/res/iconfont'},
			{from:path.resolve(SRC_PATH,'config.json'),to:'config.json'},
			{from:path.resolve(__dirname,'package.json'),to:'package.json'}
		])
	]
}