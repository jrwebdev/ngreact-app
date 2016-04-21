exports.config = {

    /*
    multiCapabilities: [{
        name: 'Chrome',
        browserName: 'chrome'
    },{
        name: 'Firefox',
        browserName: 'firefox'
    }],
    */

    specs: [
        './e2e/**/*.spec.js'
    ],

    baseUrl: 'http://localhost:8181'

};