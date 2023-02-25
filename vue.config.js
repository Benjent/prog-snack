const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin
const ImageminPlugin = require("imagemin-webpack-plugin").ImageminPlugin

module.exports = {
    lintOnSave: false,
    publicPath: "/prog-snack/",
    configureWebpack: {
        plugins: [
            new ImageminPlugin({
                disable: process.env.NODE_ENV !== "production",
                test: "/assets/img/covers/**",
            }),
            new BundleAnalyzerPlugin({ analyzerPort: 8081 }),
        ],
    },
}
