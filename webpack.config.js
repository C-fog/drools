const path = require('path');

module.exports = {
  target: 'node',  // 指定打包目标为 Node.js 环境
  entry: './src/extension.js',  // 指向你插件的主入口文件
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'extension.js',
    libraryTarget: 'commonjs2',  // 使用 commonjs2 模块规范
  },
  devtool: 'source-map',  // 开启 source map，便于调试
  externals: {
    vscode: 'commonjs vscode',  // VSCode 内置模块不打包
  },
  resolve: {
    extensions: ['.js'],  // 确保 Webpack 能解析 JavaScript 文件
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',  // 使用 Babel 来转译 JavaScript
        },
      },
    ],
  },
};
