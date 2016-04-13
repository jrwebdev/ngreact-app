require('angular');
require('angular-mocks');

var testsContext = require.context("./src", true, /\.spec.js/);
testsContext.keys().forEach(testsContext);