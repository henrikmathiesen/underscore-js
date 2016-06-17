/// <reference path="./typings/tsd.d.ts" />

module.exports = function (config) { 
    config.set({
        browsers: ['PhantomJS'],
        frameworks: ['jasmine'],
        files: [
            './bower_components/jquery/dist/jquery.js',
            './bower_components/underscore/underscore.js',
            './tst/**/*.js'
        ],
        logLevel: config.LOG_DEBUG
    });
}