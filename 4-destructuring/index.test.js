describe('for destructuring', () => {
  test('object destructuring', () => {
    const person = {
      name: 'name',
      age: 28,
      address: 'xxx',
      phone: 'xxx',
    };

    const { name, age, ...rest } = person;

    // <--start
    // TODO: Please write down the correct value. You should write the final result directly.
    const expectedName = null;
    const expectedAge = null;
    const expectedRest = null;
    // --end->

    expect(name).toEqual(expectedName);
    expect(age).toEqual(expectedAge);
    expect(rest).toEqual(expectedRest);
  });

  test('array destructuring', () => {
    const [first, second, ...rest] = [10, 20, 30, 40, 50];
    // <--start
    // TODO: Please write down the correct value. You should write the final result directly.
    const expectedObjFoo = null;
    const expectedFoo2 = null;
    const expectedFoo3 = null;
    // --end->

    expect(first).toEqual(expectedObjFoo);
    expect(second).toEqual(expectedFoo2);
    expect(rest).toEqual(expectedFoo3);
  });
});
