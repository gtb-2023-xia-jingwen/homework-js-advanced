describe('for arrow function', () => {
  test('arrow function with one parameter and return a value', () => {
    // <--start
    // TODO: 将下面的函数表达式改写为箭头函数
    const fun = function (v) {
      return v;
    };
    // --end->

    expect(fun(1)).toEqual(1);
  });

  test('arrow function with parameters and return a value', () => {
    // <--start
    // TODO: 将下面的函数表达式改写为箭头函数
    const sum = function (a, b) {
      return a + b;
    };
    // --end->

    expect(sum(1, 2)).toEqual(3);
  });

  test('arrow function with parameters and return object value', () => {
    // <--start
    // TODO: 将下面的函数表达式改写为箭头函数
    const generateObj = function (id, name) {
      return {
        id,
        name,
      };
    };
    // --end->

    expect(generateObj(1, 'Jane')).toEqual({
      id: 1,
      name: 'Jane'
    });
  });

  test('arrow function with no parameter and no returned value', () => {
    // <--start
    // TODO: 将下面的函数表达式改写为箭头函数
    let number = 1;
    const fun = function () {
      number = number + 1;
    };
    // --end->

    fun();
    expect(number).toEqual(2);
  });

  test('arrow function as a parameter', () => {
    // <--start
    // TODO: 将 map 里的函数改写为箭头函数
    const result = [1, 2, 3].map(function (x) {
      return x * x;
    });
    // --end->

    expect(result).toEqual([1, 4, 9]);
  });
});
