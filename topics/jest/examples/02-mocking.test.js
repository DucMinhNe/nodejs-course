// using jest.mock
jest.mock('./db', () => ({
  findUser: jest.fn().mockResolvedValue({ id: 1, name: 'mock' }),
}));

const { findUser } = require('./db');
const { getUserName } = require('./service');

test('getUserName returns name from db', async () => {
  const name = await getUserName(1);
  expect(name).toBe('mock');
  expect(findUser).toHaveBeenCalledWith(1);
});
