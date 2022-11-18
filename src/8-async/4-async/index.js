async function fetchData(url) {
  // <-- start
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch(error) {
    console.log(error);
  }
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL);
