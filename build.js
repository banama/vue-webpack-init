var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin")
var wb = require('webpack-boost')

// production
if(process.argv[2] == 'pro'){
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
        .live()
}

// dev
if(process.argv[2] == 'dev'){
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
            this.config.postcss.push(require('cssnano'))
            // if pserver 9999
            // this.setPublic('')
        })
        .run()
}

// live
if(process.argv[2] == 'live'){
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
        })
        .live()
}
