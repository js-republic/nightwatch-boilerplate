module.exports = {
    'Go To google': (browser) => {
        browser
            .init()
            .waitForElementVisible('body')
            .setValue('input[type=text]', browser.globals.searchTerm)
            .waitForElementVisible('button[name=btnG]')
            .click('button[name=btnG]')
            .pause(1000)
    },

    'Check movie name': (browser) => {
        browser
            .assert.containsText('.mod .kno-ecr-pt.kno-fb-ctx', browser.globals.movieName)
            .assert.containsText('.mod ._gdf', '2004')
    },

    after: (browser) => {
        browser.end();
    }
};
