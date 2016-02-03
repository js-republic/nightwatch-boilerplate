module.exports = {
    'Go To google': (browser) => {
        browser
            .init()
            .page.google().fillInSearchInput()
            .page.google().submit();
    },

    'Check movie infos': (browser) => {
        browser
            .page.result().checkMovieName()
            .page.result().checkMovieYear('2004');
    },

    after: (browser) => {
        browser.end();
    }
};
