# babel-webpack-starter
Experimenting with Webpack-Babel

notes from Traversy Media video on youtube

* `npm init`
* In `package.json` we need to install a few more modules
* `npm install --save-dev webpack webpack-dev-server babel-core babel-loader babel-preset-env`
* Create config file: `webpack.config.js`
* Add script in package.json:
```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build":"webpack"
  },
```
* What this does is when we are ready to compile our javascript we can just say "build"
* We use the configfile to cite the source file and output
* Start off in webpack.config.js with:

```
const path = require('path');

module.exports = {
    entry: {
        app: '.src/app.js'
    }
}
```

* This tells webpack the source file directory path
* Now after that entry block for the output file path and filename, and module where we define our loaders:

```
const path = require('path');

module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname,'build'),
        filename: 'app.bundle.js',
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['env']
            }
        }]
    }
}

```

* Note: regular expr `test: /\.js?$/` to process all .js files, 
* Exclude node_modules folder
* Loader: we're using babel
* query presets - we are using the babel env preset
* create new folder called `src` and inside the file `app.js`
* In app.js: `let test = () => console.log('hi');`
* So now we want to compile this.
* `npm run build`

Result:

```
Version: webpack 3.9.1
Time: 832ms
        Asset     Size  Chunks             Chunk Names
app.bundle.js  2.57 kB       0  [emitted]  app
   [0] ./src/app.js 74 bytes {0} [built]
```
