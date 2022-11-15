function chooseMultiplesOfThree(collection) {
  return collection.filter(v => v % 3 == 0);
}

function collectCarNumberCount(collection) {
  return collection.filter(v => v.indexOf('粤A') == 0).length;
}

export { chooseMultiplesOfThree, collectCarNumberCount };
