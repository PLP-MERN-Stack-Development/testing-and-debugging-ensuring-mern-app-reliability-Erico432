const request = require('supertest');
const app = require('../../src/app');
const { MongoMemoryServer } = require('mongodb-memory-server');
let mongod;

beforeAll(async () => {
  mongod = await MongoMemoryServer.create();
  process.env.MONGO_URI = mongod.getUri();
  await require('../../src/config/db')(mongod.getUri());
});

afterAll(async () => await mongod.stop());

test('register -> login', async () => {
  await request(app).post('/api/auth/register').send({ email: 'u@x.y', password: 'pass' }).expect(200);
  const res = await request(app).post('/api/auth/login').send({ email: 'u@x.y', password: 'pass' }).expect(200);
  expect(res.body.token).toBeDefined();
});
