module.exports = {
  devtool: 'eval-source-map',

  entry:  __dirname + "/app/main.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use:[{
            loader: "style-loader"
          },{
            loader: "css-loader"
          },{
            loader: "sass-loader"
          }
        ],
        exclude:/node_modules/
      },
      {
        test: /\.js$/,
        use:[{
            loader: "babel-loader",
            options: {
              presets: ["es2015"]
            }
          }
        ],
        exclude:/node_modules/
      }

    ]
  },
  devServer: {
    contentBase: "./public",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true,//实时刷新
    port: 8000
  } 
}
