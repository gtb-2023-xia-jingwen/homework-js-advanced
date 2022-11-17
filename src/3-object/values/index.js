export default function countTypesNumber(source) {
  let res = 0;
  for(let [k, v] of Object.entries(source)) {
    res += parseInt(v);
  }
  return res;
}
