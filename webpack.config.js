const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    // Defines the main JavaScript file for your application.
    entry: './src/index.js',
    
    // Defines the output directory and filename for the bundled file.
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      // The public path is necessary for GitHub Pages to find assets.
      publicPath: isProduction ? '/RocketMod/' : '/',
      clean: true, // Clean the output directory before building.
    },
    
    // Handles different file types, like CSS.
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    
    // Defines plugins to simplify things like HTML generation.
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
    ],
    
    // Source maps make debugging easier.
    devtool: isProduction ? 'source-map' : 'eval-source-map',
    
    // Webpack Dev Server settings.
    devServer: {
      open: true, // Automatically open the browser.
      port: 8080,
    },
  };
};
