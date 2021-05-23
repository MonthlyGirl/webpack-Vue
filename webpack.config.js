const path =require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const ESLintPlugin = require('eslint-webpack-plugin')


const isDev = process.env.NODE_ENV === 'development'

const config={
  mode: "production",
  entry: {
    app: path.resolve(__dirname, "./src/main.js")
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, "./dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      title:'GuestLjz'
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
  ],
  module:{
    rules:[
      {test:/\.(jpg|png|gif)$/,
        loader:'file-loader',
      },
      {
        test:/\.vue$/,
        loader:'vue-loader',
      },
      {
        test: /\.js$/, 
        exclude: /(node_modules|bower_components)/, 
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        }
      },
      {
        test:/\.css/,
        use:['style-loader','css-loader']
      },
      {
        test:/\.scss$/,
        use:[
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      { 
        test: /\.tsx?$/, 
        loader: "ts-loader" 
      },
    ]
  },
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'./src')
    },
    extensions:['.js','.jsx']
  },
 
}
if(isDev){
  config.mode='development'
  config.devServer = {
    port: 9090,
    hot: true,
    open: true,
    contentBase: path.resolve(__dirname, './public'),
    overlay: {
      errors:true
    }
  }
  config.plugins.push(
    new ESLintPlugin({})
  )
}


module.exports=config