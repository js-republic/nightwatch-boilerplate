module.exports = {
    'default': { // Paramètres de l'environement 'default'
        searchTerm : 'nightwatch',
        movieName : 'Night Watch'
    },
    'french': { // Paramètres de l'environement 'french'
        searchTerm : 'dikkenek',
        movieName : 'dikkenek'
    },

    // Arrête tout dès qu'un test échoue
    abortOnAssertionFailure: true,

    // Délais entre deux vérifications
    waitForConditionPollInterval: 300,

    // Délais à attendre par défault
    waitForConditionTimeout: 1000,

    // Echoue si une selection retourne plusieurs alors qu'elle devrait n'en retourner qu'un
    throwOnMultipleElementsReturned: false,

    // Avant et après l'éxecution de l'ensemble des tests
    before: (next) => next(),
    after: (next) => next(),

    //  Avant et après chaque éxecution de suite des tests
    beforeEach: (browser, next) => next(),
    afterEach: (browser, next) => next(),

    // Pour customiser le reporter de test
    reporter: (results, next) => next()
};