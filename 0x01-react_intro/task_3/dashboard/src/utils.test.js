import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

test('getFullYear returns the current year', () => {
  const year = new Date().getFullYear();
  expect(getFullYear()).toBe(year);
});

test('getFooterCopy returns correct string', () => {
  expect(getFooterCopy(true)).toBe('Holberton School');
  expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test('getLatestNotification returns correct notification', () => {
  expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});

