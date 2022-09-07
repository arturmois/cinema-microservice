const movies = [{
    "_id": "6316aecda440e1b785b502fe",
    "title": "Os Vingadores: Guerra Infinita",
    "synopsis": "Os heróis mais poderosos da Marvel Enfrentando o Thanos",
    "duration": 120,
    "releaseDate": new Date("2022-09-27T00:00:00Z"),
    "image": "https://pt.wikipedia.org/wiki/Avengers:_Infinity_War#/media/Ficheiro:Avengers_Infinity_War.jpg",
    "categories": [
        "Ação",
        "Aventura"
    ]
}, {
    "_id": "6316aecda440e1b785b502ff",
    "title": "Os Vingadores: Era de Ultron",
    "synopsis": "Os heróis mais poderosos da Marvel Enfrentando o Thanos",
    "duration": 120,
    "releaseDate": new Date("2022-03-27T00:00:00Z"),
    "image": "https://pt.wikipedia.org/wiki/Avengers:_Infinity_War#/media/Ficheiro:Avengers_Infinity_War.jpg",
    "categories": [
        "Ação",
        "Aventura"
    ]
}, {
    "_id": "6316aecda440e1b785b50300",
    "title": "Os Vingadores",
    "synopsis": "Os heróis mais poderosos da Marvel Enfrentando o Thanos",
    "duration": 120,
    "releaseDate": new Date("2021-04-27T00:00:00Z"),
    "image": "https://pt.wikipedia.org/wiki/Avengers:_Infinity_War#/media/Ficheiro:Avengers_Infinity_War.jpg",
    "categories": [
        "Ação",
        "Aventura"
    ]
}]

async function getAllMovies() {
    return movies;
};

async function getMovieById(id) {
    if (id == -1) return null;

    movies[0]._id = id;
    return movies[0];
};

async function getMoviePremieres() {
    movies[0].releaseDate = new Date();
    return [movies[0]];
};

module.exports = {
    getAllMovies,
    getMovieById,
    getMoviePremieres
};