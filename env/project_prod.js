module.exports = global.Project = {
    api: 'https://api.flagsmith.com/api/v1/',
    flagsmithClientAPI: 'https://api.flagsmith.com/api/v1/',
    flagsmith: '4vfqhypYjcPoGGu8ByrBaj', // This is our Bullet Train API key - Bullet Train runs on Bullet Train!
    env: 'prod', // This is used for Sentry tracking
    ga: 'UA-120237963-1', // This is our Google Analytics key
    sentry: 'https://11c8828dc24041b0a875e324b0380769@sentry.io/1320942',
    maintenance: false, // trigger maintenance mode
    cookieDomain: '.flagsmith.com',
    excludeAnalytics: 'nightwatch@solidstategroup.com',
    delighted: true, // determines whether to shw delighted feedback widget
    demoAccount: {
        email: 'kyle+bullet-train@solidstategroup.com',
        password: 'demo_account',
    },
    chargebee: {
        site: 'flagsmith',
    },
    crispChat: '8857f89e-0eb5-4263-ab49-a293872b6c19',
    mixpanel: '9448f5be8a5555c380e5dd4b7ac2c345',
    assetUrl: 'https://cdn.flagsmith.com', // Location of the static files from build/, should contain a directory called static/
    amplitude: 'b44c681b1909c01d61972b8474cc8393',
};
