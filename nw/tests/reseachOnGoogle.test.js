module.exports = {
    'Search on google': (browser) => {
        const google = browser.page.google();
        browser
            .init()
            .page.google().fillInSearchInput()
            .page.google().submit()
            .assert.containsText('#main', browser.globals.movieName)
            .end();
    },
    after: (browser)=> {
        browser.end();
    }
};