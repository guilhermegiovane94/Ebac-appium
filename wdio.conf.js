export const config = {
    /*
    runner: 'local',
    port: 4723,
    */
    user: 'oauth-guilhermegiovane94-9066a',
    key: 'ae0d5129-ef54-4a3b-8219-97649cb2c616',
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    baseUrl: 'wd/hub',

    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 1,

    capabilities: [
       /* {
        // capabilities for local Appium web tests on an Android Emulator
        platformName: 'Android',
        'appium:deviceName': 'Ebac',
        'appium:platformVersion': '14.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': `${process.cwd()}/app/ebacshop.apks`,
        'appium:appWaitActivity': '.MainActivity',
        'appium:disableIdLocatorAutocompletion': true
    }*/
        {
            platformName: 'Android',
            'appium:app': 'storage:filename=ebacshop.aab', // The filename of the mobile app
            'appium:deviceName': 'Samsung.*',
            'appium:platformVersion': '12.0',
            'appium:automationName': 'UiAutomator2',
            'sauce:options': {
               build: 'appium-build-teste-ebacshop',
               name: 'Ebac Shop Teste',
               deviceOrientation: 'PORTRAIT',
               appiumVersion: '2.0.0'
             },
             'appium:disableIdLocatorAutocompletion': true
           }
],

    logLevel: 'info',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            //permite ou não tirar screenshots
            disableWebdriverScreenshotsReporting: false,
        }]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
       // if (error) {
            await browser.takeScreenshot();
       //}
    }

}
