const path = require("path");

const config = {
    context: path.join(__dirname, "src"),
    entry: "./app",
    output: {
        path: path.join(__dirname, "dist"),
        publicPath: "dist/",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react'],
                plugins: ["transform-object-rest-spread"]
            }
        }]
    }
}

module.exports = config;
