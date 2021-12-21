import mapToHTMLString from './index';

test('水果映射为列表', () => {
  const collectionA = ['apple', 'banana', 'cherry'];
  const collectionB = ['<li>apple</li>', '<li>banana</li>', '<li>cherry</li>'];

  const result = mapToHTMLString(collectionA);
  expect(result).toEqual(collectionB);
});
