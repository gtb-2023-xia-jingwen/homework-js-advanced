describe('for this', () => {
  test('default behavior', () => {
    const obj = {
      foo() {
        return this;
      },
      bar: 1,
    };

    const foo2 = obj.foo;

    // <--start
    // TODO: Please write down the correct value. You should write the final result directly.
    const expectedObjFoo = obj;
    const expectedFoo2 = undefined;
    // --end->

    expect(obj.foo()).toEqual(expectedObjFoo);
    expect(foo2()).toEqual(expectedFoo2);
  });

  test('bind this', () => {
    const obj = {
      foo() {
        return this;
      },
      bar: 1,
    };

    const foo2 = obj.foo;
    const foo3 = foo2.bind(obj);

    // <--start
    // TODO: Please write down the correct value. You should write the final result directly.
    const expectedObjFoo = obj;
    const expectedFoo2 = undefined;
    const expectedFoo3 = obj;
    // --end->

    expect(obj.foo()).toEqual(expectedObjFoo);
    expect(foo2()).toEqual(expectedFoo2);
    expect(foo3()).toEqual(expectedFoo3);
  });
});
