import { remove, set } from '../index';

test('Set', () => {
  expect(set({ x: 0, y: 0, z: -1 }, 'y', 1)).toStrictEqual({
    x: 0,
    y: 1,
    z: -1
  });
});

test('Delete', () => {
  expect(remove({ x: 0, y: 0, z: -1 }, 'y')).toStrictEqual({ x: 0, z: -1 });
});
