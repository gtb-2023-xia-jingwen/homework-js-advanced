export default function mapToHTMLString(collection) {
  return collection.map(v => `<li>${v}</li>`);
}
