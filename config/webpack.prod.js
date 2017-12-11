const path = require('path');
const webpack = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
//const LiveReloadPlugin = require('webpack-livereload-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry:  {
  	index:[
  		path.join(__dirname ,'../src/public/scripts/index.es'),
  		path.join(__dirname , '../src/public/scripts/indexadd.js')
  	],
  	tags:[
  		path.join(__dirname , '../src/public/scripts/tags.es')
  	]
  },//已多次提及的唯一入口文件
  output: {
    path: path.join(__dirname,"../build/"),//打包后的文件存放的地方
    filename: "public/scripts/[name]-[hash:5].js"//打包后输出文件的文件名
  },
   module: {
    rules: [
      {
        test: /\.es$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015','stage-0']
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
        'NODE_ENV':'prod'
      }
    }),
    //new LiveReloadPlugin({appendScriptTag:true})
    new ExtractTextPlugin("public/css/[name]-[hash:5].css"),
    new webpack.optimize.UglifyJsPlugin(),//js压缩  压缩只在prod版本
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name:'vendor',
        filename:"public/scripts/common/vendor-[hash:5].min.js"
     })
  ]
}