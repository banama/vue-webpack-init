var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin")
var wb = require('webpack-boost')

// production
if(process.argv[2] == 'pro'){
    process.env.NODE_ENV = "production"
    new wb()
        .setPath('static')
        .setProject('vue-template')
        .setPublic('/static/')
        .setEntry({
            main: ['./src/main.js'],
        })
        .setHtml([
            {
                template: "./template/index.html",
                filename: "index.html",
                chunk: ['main']
            }
        ])
        .pro()
        .hook(function(){
            this.config.postcss.push(require('cssnano'))
        })
        .run()
}

// dev
if(process.argv[2] == 'dev'){
    process.env.NODE_ENV = "dev"
    new wb()
        .setPath('dist')
        .setProject('teststatic')
        .setPublic('/static/projects')
        .setEntry({
            main: ['./src/main.js'],
        })
        .setHtml([
            {
                template: "./template/index.html",
                filename: "index.html",
                chunk: ['main']
            }
        ])
        .hook(function(){
            // if pserver(python -m SimpleHTTPServer 9999)
            // this.setPublic('')
            this.config.watch = true
        })
        .run()
}

if(process.argv[2] == 'live'){
    process.env.NODE_ENV = "dev"
    new wb()
        .setPath('dist')
        .setProject('teststatic')
        .setPublic('/static/projects')
        .setEntry({
            main: ['./src/main.js'],
        })
        .setHtml([
            {
                template: "./template/index.html",
                filename: "index.html",
                chunk: ['main']
            },
        ])
        .setExtract(['sty', 'css', 'less', 'scss', 'stylus'], '[name].css')
        .hook(function(){
            this.setPublic('')
            this.devtool = 'source-map'
        })
        .live({
            port: 8001
        })
}
