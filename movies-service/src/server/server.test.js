const { test, expect } = require('@jest/globals');
const server = require('./server');
const request = require('supertest');

test('Server Start', async () => {
    const app = await server.start();
    expect(app).toBeTruthy();
});

test('Health Check', async () => {
    const app = await server.start();
    const response = await request(app).get('/health');
    expect(response.status).toEqual(200);
});

test('Server Stop', async () => {
    const isStopped = await server.stop;
    expect(isStopped).toBeTruthy();
});