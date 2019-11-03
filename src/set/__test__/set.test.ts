import { add, remove } from '../index';

test('Add unique value', () => {
  const set = new Set(['Alice', 'Bob', 'Charlie']);

  // Check whether the new set only contains the expected values
  expect(add(set, 'Dyllan')).toEqual(
    new Set(['Alice', 'Bob', 'Charlie', 'Dyllan'])
  );

  // Verify that the original set hasn't been mutated
  expect(set).toEqual(new Set(['Alice', 'Bob', 'Charlie']));
});

test('Add included value', () => {
  const set = new Set(['Alice', 'Bob', 'Charlie']);

  // Check whether the new set only contains the expected values
  expect(add(set, 'Bob')).toEqual(new Set(['Alice', 'Bob', 'Charlie']));
});

test('Remove included value', () => {
  const set = new Set(['Alice', 'Bob', 'Charlie']);

  /*  Check whether the new set only contains the expected values and the
        'removed' property is true */
  expect(remove(set, 'Bob')).toEqual({
    removed: true,
    set: new Set(['Alice', 'Charlie'])
  });

  // Verify that the original set hasn't been mutated
  expect(set).toEqual(new Set(['Alice', 'Bob', 'Charlie']));
});

test('Remove unincluded value', () => {
  const set = new Set(['Alice', 'Bob', 'Charlie']);

  /*  Check whether the new set only contains the expected values and the
        'removed' property is true */
  expect(remove(set, 'Dyllan')).toEqual({
    removed: false,
    set: new Set(['Alice', 'Bob', 'Charlie'])
  });

  // Verify that the original set hasn't been mutated
  expect(set).toEqual(new Set(['Alice', 'Bob', 'Charlie']));
});
