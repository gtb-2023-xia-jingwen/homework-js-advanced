function fetchData(url) {
  // <-- start
  return fetch(url).then((response) => response.json());
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL)
  .then((result) => {
    document.writeln(result.name);
  })
  .catch((error) => {
    console.error(error);
  });
