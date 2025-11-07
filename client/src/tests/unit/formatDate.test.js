import { formatDate } from '../../utils/formatDate';

test('formats ISO date', () => {
  expect(formatDate('2023-01-01T00:00:00Z')).toMatch(/\d{1,2}\/\d{1,2}\/\d{4}/);
});
