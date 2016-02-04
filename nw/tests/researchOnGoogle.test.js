module.exports = {
    'Search on google': (browser) => {
        browser
            .init()
            .longCommand()
            .page.google().fillInSearchInput()
            .page.google().submit()
            .assert.containsText('#main', browser.globals.movieName)
            .end();
    },
    after: (browser)=> {
        browser.end();
    }
};