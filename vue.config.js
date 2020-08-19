module.exports = {
    // 选项...
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'assets',
    // indexPath: '',
    // eslint  lintOnSave: 'default'。这会强制 eslint-loader 将 lint 错误输出为编译错误，同时也意味着 lint 错误将会导致编译失败。
    lintOnSave: process.env.NODE_ENV !== 'production',
    devServer: {
        host: '0.0.0.0',//指定要使用的主机
        port: 8080,
        hot: true,//启用webpack的热模块更换功能
        open: true,//dev-server在服务器启动后开浏览器
        // openPage: '/different/page', // 可以是数组，多个
        proxy: {
            '/api': {
                target: 'http://localhost:3000', // /api/users现在有个的请求会将请求代理到http://localhost:3000/api/users
                pathRewrite: {'^/api' : ''}, // 如果您不想/api被传递，我们需要重写路径
                secure: false,// 默认情况下，将不接受在HTTPS上运行的具有无效证书的后端服务器
                changeOrigin: true,
              }
        }
    }
}