var merge = require('lodash/merge');
var webpackConfig = require('./webpack.config');

webpackConfig = merge(webpackConfig, {
    devtool: 'inline-source-map'
});

var customLaunchers = {},
    browsers = ['Chrome'],
    autoWatch = true,
    reporters = ['logcapture', 'super-dots', 'mocha'];

if (process.env.NODE_ENV === 'ci') {
  customLaunchers = {
    sl_chrome_win7: {
      base: 'SauceLabs',
      browserName: 'chrome',
      platform: 'Windows 7'
    },
    sl_ie11_win7: {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      version: '11',
      platform: 'Windows 7'
    },
    sl_edge_win10: {
      base: 'SauceLabs',
      browserName: 'MicrosoftEdge',
      platform: 'Windows 10'
    }
  };
  browsers = Object.keys(customLaunchers);
  autoWatch = false;
  reporters.push('sauceLabs');
}

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'spec.js'
    ],
    exclude: [],
    preprocessors: {
        'spec.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
        noInfo: true
    },
    reporters: reporters,
    mochaReporter: {
      output: 'minimal'
    },
    sauceLabs: {
      testName: 'Karma Tests'
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: autoWatch,
    customLaunchers: customLaunchers,
    browsers: browsers,
    singleRun: false,
    concurrency: Infinity
  })
};
