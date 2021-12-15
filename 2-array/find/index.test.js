import find00OldPerson from './index';

test('寻找90后', () => {
  const collection = [
    {
      name: 'Tom',
      age: 28
    },
    {
      name: 'Lucky',
      age: 18
    },
    {
      name: 'Jerry',
      age: 1
    }
  ];

  const result = find00OldPerson(collection);
  expect(result).toEqual('Tom');
});
