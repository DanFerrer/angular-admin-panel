// import webpack from 'webpack';
import path from 'path';

module.exports = {
    devtool: 'source-map',
    entry: './app/index.js',
    output: {
            path: path.join(__dirname, 'dist'),
            filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.scss$/, loaders: ['style', 'css', 'sass']},
            {test: /\.js$/, loader: "babel", exclude: /node_modules/}
        ]
    }
};
