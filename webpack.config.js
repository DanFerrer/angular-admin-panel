const path = require('path');

require('dotenv').config();

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
            	loader: 'html'
            },
            {
            	test: /\.css$/,
            	loaders: ['style', 'css']
            },
            {
            	test: /\.js$/,
            	loaders: ['ng-annotate', 'babel?presets[]=es2015&cacheDirectory=true'],
            	exclude: /node_modules/
            },
            {
      			test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      			loader: "url?limit=10000&mimetype=application/font-woff"
    		},
    		{
      			test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
     			loader: "url?limit=10000&mimetype=application/font-woff"
    		},
    		{
      			test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      			loader: "url?limit=10000&mimetype=application/octet-stream"
    		},
    		{
      			test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      			loader: "file"
    		},
    		{
      			test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      			loader: "url?limit=10000&mimetype=image/svg+xml"
    		}
        ]
    }
};
