const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    addTask: './src/modules/addTask.js',
    clear: './src/modules/clear.js',
    comletedTask: './src/modules/comletedTask.js',
    removeTask: './src/modules/removeTask.js',
    showTasks: './src/modules/showTasks.js',
    taskObj: './src/modules/taskObj.js',
    updateTask: './src/modules/updateTask.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: './src/index.html',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
  },
};