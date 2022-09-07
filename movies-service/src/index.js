const movies = require('./api/movies');
const repository = require('./repository/repository');
const server = require('./server/server');


(async () => {
    try {
        await server.start(movies, repository);
    }
    catch {
        console.error(error);
    }
})();