const path = require('path');
 
module.exports = {
    mode: 'development',
    entry: './components/main.jsx',
    output: {
        path: path.resolve(__dirname, 'app/static/js/'),
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: { presets: ["@babel/env"]}
            }
        ]
    }
}