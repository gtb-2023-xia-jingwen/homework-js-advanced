import concat from './index';

test('合并源对象并添加新的编号', () => {
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];

  const result = concat(arr1, arr2);
  expect(result).toEqual([1, 2, 3, 'a', 4, 5, 6]);
});
