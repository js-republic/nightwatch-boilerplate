module.exports = {
    elements: {
        movieTitle: '.mod .kno-ecr-pt.kno-fb-ctx',
        movieYear: '.mod ._gdf'
    },
    commands: [{
        checkMovieName () {
            this.assert.containsText('@movieTitle', this.api.globals.movieName);
            return this.api;
        },
        checkMovieYear (year) {
            this.assert.containsText('@movieYear', year);
            return this.api;
        }
    }]
};