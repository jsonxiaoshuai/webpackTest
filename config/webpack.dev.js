const path = require('path');
const webpack = require('webpack');
//const LiveReloadPlugin = require('webpack-livereload-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
  	index:[
  		path.join(__dirname, '../src/public/scripts/index.es'),
  		path.join(__dirname, '../src/public/scripts/indexadd.js')
  	],
  	tags:[
  		path.join(__dirname, '../src/public/scripts/tags.es')
  	]
  },//已多次提及的唯一入口文件
  output: {
     filename: 'public/scripts/[name]-[hash:5].js',//打包后输出文件的文件名
    path: path.join(__dirname, '../build/')//打包后的文件存放的地方
  },
  module: {
    rules: [
      {
        test: /\.es$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["es2015","stage-0"]
          }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
    plugins:[
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV':'dev'
      }
    }),
     //new LiveReloadPlugin({appendScriptTag:true}),
     new ExtractTextPlugin("public/css/[name]-[hash:5].css"),
     //js得公共文件生成，不需要安装插件，webpack自带
     new webpack.optimize.CommonsChunkPlugin({
        name:'vendor',
        filename:"public/scripts/common/vendor-[hash:5].min.js"
     }),
     //html得生产文件配置
     new HtmlWebpackPlugin({  // Also generate a test.html
      filename: './views/layout.html',
      template: 'src/views/layout.html',
      inject:false//不让他注入
    }),
     new HtmlWebpackPlugin({  // Also generate a test.html
      filename: './views/index.html',
      template: 'src/views/index.html'
    }),
  ]
}