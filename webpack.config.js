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
           {
            	test: /\.html$/,
            	loader: 'ngtemplate?relativeTo=' + (path.resolve(__dirname)) + '/app/!html'
            },
            {
           		test: /\.scss$/,
            	loaders: ['style', 'css', 'sass']
            },
            {
            	test: /\.css$/,
            	loaders: ['style', 'css']
            },
            {
            	test: /\.js$/,
            	loaders: ['ng-annotate', 'babel?presets[]=es2015&cacheDirectory=true'],
            	exclude: /node_modules/
            }
        ]
    }
};
