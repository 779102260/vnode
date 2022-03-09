const path = require('path')
const Config = require('webpack-chain')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const config = new Config()
// prettier-ignore
config
  .mode(process.env.mode)
  .entry('index')
    .add('./src/index')
    .end()
  .output
    .filename('[name].js')
    .path(path.resolve(__dirname, '../dist'))
    .pathinfo(false) // 不生成路径信息，有助于编译提速
    .end()
  .when(process.env.mode === 'development', ctx => {
    ctx.devtool('inline-source-map')
  })
  // 解析
  .resolve
    .extensions
      .add('.js')
      .end()
    .alias
      .set('src', path.resolve(__dirname, 'src'))
      .end()
    .end()
  // 清空dist
  .when(process.env.mode === 'production', ctx => {
    ctx
      .plugin('clean')
        .use(CleanWebpackPlugin)
  })
  // 打包分析
  .when(process.argv.includes('report'), ctx => {
    ctx
      .plugin('BundleAnalyzerPlugin')
        .use(BundleAnalyzerPlugin, [{
          analyzerMode: 'static'
        }])
  })
  // 开发配置
  .when(process.env.mode === 'development', ctx => {
    ctx.devServer
      // 静态服务器
      .host('localhost')
      .set('static', './dist')
      // 热替换
      .hot(true)
      // 转发
      // .proxy({
      //   '/api': {
      //     target: 'http://localhost:3000',
      //     pathRewrite: {'^/api' : ''}
      //   }
      // })
      // 重定向
      .historyApiFallback(true)
  })

// babel
// prettier-ignore
config.module
    .rule('js')
    .test(/\.(js|ts)x?$/i)
      .exclude
        .add(/node_modules/)
        .end()
      .use('babelLoader')
      .loader('babel-loader')
      .options({
        cacheDirectory: true,
        cacheCompression: false
      })
// typescript
config.resolve.extensions.add('.ts')
module.exports = config.toConfig()
