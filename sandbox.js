'use strict';

/*************************************************
 * Babel
 * https://babeljs.io/
 * 
 * Try it out: https://babeljs.io/repl
*************************************************/



/*************************************************
 * Node.js & Babel
*************************************************/
// Install Node.js

// Install Babel by NPM
// npm install @babel/core @babel/cli --save-dev

// Additional install - Babel Preset -- In order to convert the code correctly
// npm install @babel/preset-env --save-dev

// In order to use it, create a new file called .babelrc
// Put the redirection to the presets inside the object. Like in the example file.



/*************************************************
 * Babel CLI
 * 
 * 
 * 
 * node_modules/.bin/babel before.js -o after.js
 * 
 * The first part is in order to use the babel CLI
 * The second part is where we are going to take the new JS
 * The -o is to say this is going to be the output
 * The last part is the file that is going to be created with the old code -- full responsive and compatible with all browsers
*************************************************/



/*************************************************
 * NPM Scripts & Watching Files
*************************************************/
/*************************************************
 * In order to work this better, we created a src folder, then an index.js inside of it.
 * Then we create other folder called dist and this is where we compile the end code.
 * 
 * The dist folder has inside an assets folder with all the HTML, CSS, JS, IMG, Fonts....
 * And then We create a bundle.js file that is going to have all the compiled code
 * 
 * dist is the folder that we deploy to PROD or into the server.
*************************************************/


// define auto copile inside the package.json
// add -w in the script to keep listening

// node_modules/.bin/babel before.js -w -o after.js


/*************************************************
 * Webpack
 * 
 * https://webpack.js.org/
 * 
 * Is a module bundler
 * Containing multiple files you can bundle them in 1 file.
 * 
 * Works with Babel
 * Local development server
*************************************************/

/*************************************************
 * Setting Up Webpack File
*************************************************/

// see webpack.config.js


/*************************************************
 * Webpack CLI
 * 
 * To Install:
 * npm install webpack webpack-cli --save-dev
 * 
 * To run it:
 * node_modules/.bin/webpack in the console -> the bundle.js file has minified code.
 * 
*************************************************/



/*************************************************
 * The Webpack Dev Server
 * 
 * To Install:
 * npm install webpack-dev-server@3.2.1
 * 
 * Then we need to config inside the webpack.config.js file
 * 
 * devServer: {
 *   contentBase: path.resolve(__dirname, 'dist'),
 *   publicPath: '/assets/'
 * }
*************************************************/


/*************************************************
 * Production & Development Modes
 * 
 * Add in the package.json
 * "scripts": {
 *  "build": "node_modules/.bin/webpack --mode production",
 *  "serve": "webpack serve --mode development"
 * },
*************************************************/


/*************************************************
 * Babel & Webpack Together
 * 
 * Install:
 * npm install babel-loader --save-dev
 * 
 * module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  }
*************************************************/


/*************************************************
 * Webpack Boilerplate
 * 
 * Its in the Github lesson-165 -> need to do one for me
*************************************************/