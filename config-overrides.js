const JavaScriptObfuscator = require('webpack-obfuscator');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
        new JavaScriptObfuscator({
            rotateStringArray: true
        }, ['excluded_bundle_name.js'])
    ]
};
