const request = require('supertest');
const app = require('../../src/app');
const jwt = require('jsonwebtoken');
const { MongoMemoryServer } = require('mongodb-memory-server');
let mongod, token;

beforeAll(async () => {
  mongod = await MongoMemoryServer.create();
  process.env.MONGO_URI = mongod.getUri();
  await require('../../src/config/db')(mongod.getUri());

  await request(app).post('/api/auth/register').send({ email: 't@x.y', password: 'pass' });
  const loginRes = await request(app).post('/api/auth/login').send({ email: 't@x.y', password: 'pass' });
  token = loginRes.body.token;
});

afterAll(async () => await mongod.stop());

test('create and list todo', async () => {
  await request(app).post('/api/todos')
    .set('Authorization', `Bearer ${token}`)
    .send({ text: 'Test todo' })
    .expect(200);

  const res = await request(app).get('/api/todos')
    .set('Authorization', `Bearer ${token}`)
    .expect(200);
  expect(res.body).toEqual(expect.arrayContaining([expect.objectContaining({ text: 'Test todo' })]));
});
