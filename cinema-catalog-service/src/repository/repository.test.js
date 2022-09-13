const { test, expect, beforeAll, afterAll } = require('@jest/globals');
const repository = require('./repository');
const database = require('../config/database');

let cityId = null;

beforeAll(async () => {
    const cities = await repository.getAllCities();
    cityId = cities[0]._id;
})

afterAll(async () => {
    await database.disconnect();
    await database.disconnect();
})

test('getAllCities', async () => {
    const cities = await repository.getAllCities();
    expect(Array.isArray(cities)).toBeTruthy();
    expect(cities.length).toBeTruthy();
});

test('getCinemasByCityId', async () => {
    const city = await repository.getCinemasByCityId(cityId);
    console.log(city);
    expect(city).toBeTruthy();
    expect(Array.isArray(city.cinemas)).toBeTruthy();
});