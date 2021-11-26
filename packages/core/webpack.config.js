const htmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpackConfigCommon = require('../../webpack/webpack.config')
const { ModuleFederationPlugin } = require('webpack').container
const { dependencies: deps } = require('./package.json');

console.log(process.env.NODE_ENV, 'process.env.NODE_ENV')
console.log('core')

module.exports = {
  ...webpackConfigCommon,
  output: {
    publicPath: 'http://localhost:3001/',
  },
  plugins: [
    ...webpackConfigCommon.plugins,
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      favicon: './public/favicon.ico',
    }),
    new ModuleFederationPlugin({
      name: 'core',
      filename: 'remoteEntry.js',
      exposes: {
        './CoreHelloWorld': './src/components/CoreHelloWorld.vue',
      },
      remotes: {
        'account': 'account@http://localhost:3002/remoteEntry.js',
        'shared': 'shared@http://localhost:3003/remoteEntry.js',
      },
      shared: {
        ...deps,
        'vue': {
          eager: true,
          singleton: true,
          requiredVersion: deps['vue'],
        },
        'vue-router': {
          eager: true,
          singleton: true,
          requiredVersion: deps['vue'],
        }
      }
    })
  ],
  devServer: {
    port: 3001,
  },
}
