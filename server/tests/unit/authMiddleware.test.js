const auth = require('../../src/middleware/auth');
const jwt = require('jsonwebtoken');

test('passes with valid token', () => {
  const token = jwt.sign({ id: '123' }, 'supersecret');
  const req = { header: jest.fn().mockReturnValue(`Bearer ${token}`) };
  const res = {};
  const next = jest.fn();
  auth(req, res, next);
  expect(next).toHaveBeenCalled();
});
