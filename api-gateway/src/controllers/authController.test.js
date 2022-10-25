const { test, expect, beforeAll, afterAll } = require('@jest/globals');
const app = require('../server/index');
const request = require('supertest');
const repository = require('../repository/repository');
const { ObjectId } = require('mongodb');

const loginOk = {
    email: 'arturmois@gmail.com',
    password: '123456'
}

const loginNOk = {
    email: 'arturmois@gmail.com',
    password: '12345'
}

let token = '';
const tokenBlacklist = new ObjectId().toHexString();

beforeAll(async () => {
    process.env.PORT = 4001;

    const response = await request(app)
        .post('/login/')
        .set('Content-Type', 'application/json')
        .send(loginOk);
    token = response.body.token;

    await repository.blacklistToken(tokenBlacklist);
})

afterAll(async () => {
    app.close();
})

test('POST /login/ 200 OK', async () => {
    const response = await request(app)
        .post('/login/')
        .set('Content-Type', 'application/json')
        .send(loginOk);

    expect(response.status).toEqual(200);
    expect(response.body.token).toBeTruthy();
})

test('POST /login/ 422 UNPROCESSABLE ENTITY', async () => {
    loginOk.data = new Date();

    const response = await request(app)
        .post('/login/')
        .set('Content-Type', 'application/json')
        .send(loginOk);

    expect(response.status).toEqual(422);
})

test('POST /login/ 401 UNAUTHORIZED', async () => {
    const response = await request(app)
        .post('/login/')
        .set('Content-Type', 'application/json')
        .send(loginNOk);

    expect(response.status).toEqual(401);
})

test('POST /logout/ 200 OK', async () => {
    const response = await request(app)
        .post('/logout/')
        .set('Content-Type', 'application/json')
        .set('authorization', `Bearer ${token}`);

    expect(response.status).toEqual(200);
})

test('POST /logout/ 401', async () => {
    const response = await request(app)
        .post('/logout/')
        .set('Content-Type', 'application/json')
        .set('authorization', `Bearer ${token}1`);

    expect(response.status).toEqual(401);
})

test('POST /logout/ 401 (Blacklist)', async () => {
    const response = await request(app)
        .post('/logout/')
        .set('Content-Type', 'application/json')
        .set('authorization', `Bearer ${tokenBlacklist}`);

    expect(response.status).toEqual(401);
})