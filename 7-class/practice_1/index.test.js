import Person from './person';

describe('Person', () => {
  test('should have field name and age', () => {
    const person = new Person('Tom', 21);
    expect(person.name).toBe('Tom');
    expect(person.age).toBe(21);
  });

  test('should have a method introduce, introduce person with name and age', () => {
    const person = new Person('Tom', 21);
    const introduce = person.introduce();
    expect(introduce).toBe('My name is Tom. I am 21 years old.');
  });
});
