const path = require('path');
 
module.exports = {
    entry: './components/main.jsx',
    output: {
        path: path.resolve(__dirname, 'flask_app/static/js/'),
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