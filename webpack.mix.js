const mix = require('laravel-mix');
const electron = require("electron-connect").server.create();
const SvgSpriteLoaderPlugin = require('svg-sprite-loader/plugin');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.webpackConfig({
    module: {
       rules: [{
           test: /\.riot$/,
           exclude: /node_modules/,
           use: [{
               loader: '@riotjs/webpack-loader',
               query: {
                   hot: false
               }
           }]
       }]
   }
}).options({
    processCssUrls: false,
})

mix.js('src/index.js', 'dist/js')
    .sass('src/scss/styles.scss', 'dist/css')
    .copy('src/fonts/*', 'dist/fonts')
    .copy('src/audio/*', 'dist/audio')
    .copy('src/gifs/*', 'dist/gifs')
    .then(function() {
        electron.start();
    });
