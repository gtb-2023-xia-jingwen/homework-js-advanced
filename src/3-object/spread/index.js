export default function addSerialNumber(source) {
  let res = {serialNumber: '12345', ...source};
  res.type = 'B';
  return res;
}
