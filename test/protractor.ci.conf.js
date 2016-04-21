exports.config = {

    sauceUser: process.env.SAUCE_USERNAME,
    sauceKey: process.env.SAUCE_ACCESS_KEY,

    multiCapabilities: [{
        browserName: 'chrome',
        platform: 'Windows 10',
        'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
        build: process.env.TRAVIS_BUILD_NUMBER
    },{
        browserName: 'edge',
        platform: 'Windows 10',
        'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
        build: process.env.TRAVIS_BUILD_NUMBER
    },{
        browserName: 'internet explorer',
        version: '11',
        platform: 'Windows 7',
        'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
        build: process.env.TRAVIS_BUILD_NUMBER
    }],

    specs: [
        './e2e/**/*.spec.js'
    ],

    baseUrl: 'http://localhost:8181'

};