module.exports = {
  configureWebpack: {
    // 解决路径相关问题
    resolve: {
      // 配置别名
      alias: {
        assets: 'src/assets',
        common: 'src/common',
        components: 'src/components',
        network: 'src/network',
        views: 'src/views'
      }
    }
  }
};
