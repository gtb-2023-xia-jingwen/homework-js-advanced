export default function find00OldPerson(collection) {
  return collection.find(({age}) => age > 22).name;
}
