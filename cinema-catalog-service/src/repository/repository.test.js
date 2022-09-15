const { test, expect, beforeAll, afterAll } = require('@jest/globals');
const repository = require('./repository');
const database = require('../config/database');

let cityId = null;
let cinemaId = null;
let movieId = null;

beforeAll(async () => {
    const cities = await repository.getAllCities();
    cityId = cities[cities.length - 1]._id;

    const cinemas = await repository.getCinemasByCityId(cityId);
    cinemaId = cinemas[0]._id;

    movieId = cinemas[0].salas[0].sessoes[0].idFilme;
})

afterAll(async () => {
    await database.disconnect();
    await database.disconnect();
});

test('getAllCities', async () => {
    const cities = await repository.getAllCities();
    expect(Array.isArray(cities)).toBeTruthy();
    expect(cities.length).toBeTruthy();
})

test('getCinemasByCityId', async () => {
    const cinemas = await repository.getCinemasByCityId(cityId);
    expect(Array.isArray(cinemas)).toBeTruthy();
})

test('getMoviesByCinemaId', async () => {
    const movies = await repository.getMoviesByCinemaId(cinemaId);
    expect(Array.isArray(movies)).toBeTruthy();
    expect(movies.length).toBeTruthy();
})