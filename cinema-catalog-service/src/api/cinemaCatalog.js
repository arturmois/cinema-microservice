module.exports = (app, repository) => {

    app.get('/cities', async (req, res, next) => {
        const cities = await repository.getAllCities();

        res.json(cities);
    })

    app.get('/cities/:cidyId/movies', async (req, res, next) => {
        const movies = await repository.getMoviesByCinemaId(req.params.cityId);
        if (!movies) return res.sendStatus(404);

        res.json(movies);
    })

    app.get('/cities/:cidyId/movies/:movieId', async (req, res, next) => {
        const sessions = await repository.getMoviesSessionsByCityId(req.params.cityId, req.params.movieId);
        if (!sessions) return res.sendStatus(404);

        res.json(sessions);
    })

    app.get('/cities/:cidyId/cinemas', async (req, res, next) => {
        const cinemas = await repository.getCinemasByCityId(req.params.cityId);
        if (!cinemas) return res.sendStatus(404);

        res.json(cinemas);
    })

    app.get('/cinemas/:cinemaId/movies', async (req, res, next) => {
        const movies = await repository.getMoviesByCinemaId(req.params.cinemaId);
        if (!movies) return res.sendStatus(404);

        res.json(movies);
    })

    app.get('/cinemas/:cinemaId/movies/movieId', async (req, res, next) => {
        const movies = await repository.getMoviesSessionsByCinemaId(req.params.cinemaId, req.params.movieId);
        if (!movies) return res.sendStatus(404);

        res.json(movies);
    })
}