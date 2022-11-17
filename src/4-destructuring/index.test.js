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
    const expectedName = 'name';
    const expectedAge = 28;
    const expectedRest = {address: 'xxx', phone: 'xxx'};
    // --end->

    expect(name).toEqual(expectedName);
    expect(age).toEqual(expectedAge);
    expect(rest).toEqual(expectedRest);
  });

  test('array destructuring', () => {
    const [first, second, ...rest] = [10, 20, 30, 40, 50];
    // <--start
    // TODO: Please write down the correct value. You should write the final result directly.
    const expectedObjFoo = 10;
    const expectedFoo2 = 20;
    const expectedFoo3 = [30, 40, 50];
    // --end->

    expect(first).toEqual(expectedObjFoo);
    expect(second).toEqual(expectedFoo2);
    expect(rest).toEqual(expectedFoo3);
  });
});
