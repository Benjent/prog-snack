const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin

module.exports = {
    lintOnSave: false,
    publicPath: "/prog-snack/",
    configureWebpack: {
        plugins: [
            new BundleAnalyzerPlugin({ analyzerPort: 8081 }),
        ],
    },
}
