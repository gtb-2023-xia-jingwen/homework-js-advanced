import addSerialNumber from './index';

test('合并源对象并添加新的编号', () => {
  const source = {
    type: 'A',
    properties: {
      color: 'green',
      status: 'raw'
    }
  };
  const expected = {
    serialNumber: '12345',
    type: 'B',
    properties: {
      color: 'green',
      status: 'raw'
    }
  };

  const result = addSerialNumber(source);
  expect(result).toEqual(expected);
});
