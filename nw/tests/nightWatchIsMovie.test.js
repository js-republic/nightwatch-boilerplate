module.exports = {
    'Go To google': (browser) => {
        browser
            .init()
            .waitForElementVisible('body', 1000)
            .setValue('input[type=text]', 'nightwatch')
            .waitForElementVisible('button[name=btnG]', 1000)
            .click('button[name=btnG]')
            .pause(1000)
    },

    'Check movie name': (browser) => {
        browser
            .assert.containsText('.mod .kno-ecr-pt.kno-fb-ctx', 'Night Watch')
            .assert.containsText('.mod ._gdf', '2004')
    },

    after: (browser) => {
        browser.end();
    }
};
