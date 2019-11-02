import { pop, push, reverse, set, shift, sort, splice, unshift } from '..';

test('Push', () => {
  expect(push(['Hi, world!'], 'Bye, world!', 'Hello, world!')).toStrictEqual([
    'Hi, world!',
    'Bye, world!',
    'Hello, world!'
  ]);
});

test('Pop', () => {
  expect(pop(['Hi, world!', 'Bye, world!', 'Hello, world!'])).toStrictEqual({
    array: ['Hi, world!', 'Bye, world!'],
    element: 'Hello, world!'
  });
});

test('Shift', () => {
  expect(shift(['Hi, world!', 'Bye, world!', 'Hello, world!'])).toStrictEqual({
    array: ['Bye, world!', 'Hello, world!'],
    element: 'Hi, world!'
  });
});

test('Unshift', () => {
  expect(unshift(['Hello, world!'], 'Hi, world!', 'Bye, world!')).toStrictEqual(
    ['Hi, world!', 'Bye, world!', 'Hello, world!']
  );
});

test('Splice', () => {
  expect(
    splice(
      ['Hi, world!', 'Bye, world!', 'Hello, world!'],
      -2,
      1,
      'Goodbye, world!'
    )
  ).toStrictEqual({
    array: ['Hi, world!', 'Goodbye, world!', 'Hello, world!'],
    removed: ['Bye, world!']
  });
});

test('Sort', () => {
  expect(sort(['Alphabetical', 'Bye', 'Automatically!'])).toStrictEqual([
    'Alphabetical',
    'Automatically!',
    'Bye'
  ]);
});

test('Reverse', () => {
  expect(reverse(['Hi, world!', 'Bye, world!', 'Hello, world!'])).toStrictEqual(
    ['Hello, world!', 'Bye, world!', 'Hi, world!']
  );
});

test('Set', () => {
  expect(
    set(['Hi, world!', 'Bye, world!', 'Hello, world!'], -2, 'Goodbye, world!')
  ).toStrictEqual(['Hi, world!', 'Goodbye, world!', 'Hello, world!']);
});
