const validateEmail = require('../../src/utils/validateEmail');

test('validates email', () => {
  expect(validateEmail('a@b.c')).toBe(true);
  expect(validateEmail('abc')).toBe(false);
});
