module.exports = {
    elements: {
        searchInput: 'input[type=text]',
        searchBtn: 'button[name=btnG]'
    },
    commands: [{
        fillInSearchInput () {
            this
                .waitForElementVisible('body')
                .setValue('@searchInput', this.api.globals.searchTerm);
            return this.api;
        },
        submit () {
            this
                .waitForElementVisible('@searchBtn')
                .click('@searchBtn')
                .api.pause(1000);
            return this.api;
        }
    }]
};