const { test, expect, beforeAll } = require('@jest/globals');
const repository = require('./repository');
const database = require('../config/database');

let testMovieId = null;

beforeAll(async () => {
    const movies = await repository.getAllMovies();
    testMovieId = movies[0]._id;
});

afterAll(async () => {
    await database.disconnect();
    await database.disconnect();
})

test('Getting All Movies', async () => {
    const movies = await repository.getAllMovies();
    expect(Array.isArray(movies)).toBeTruthy();
    expect(movies.length).toBeTruthy();
});

test('Getting Movie By Id', async () => {
    const movie = await repository.getMovieById(testMovieId);
    expect(movie).toBeTruthy();
    expect(movie._id).toEqual(testMovieId);
});

test('Getting Movie Premieres', async () => {
    const monthAgo = new Date();
    monthAgo.setMonth(-1);

    const movies = await repository.getMoviePremieres();
    expect(Array.isArray(movies)).toBeTruthy();
    expect(movies.length).toBeTruthy();
    expect(movies[0].releaseDate.getTime()).toBeGreaterThanOrEqual(monthAgo.getTime());
});