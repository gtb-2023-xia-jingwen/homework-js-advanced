function fetchData(url) {
  // <-- start
  // TODO: 通过Promise实现异步请求
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL)
  .then((result) => {
    document.writeln(JSON.parse(result).name);
  })
  .catch((error) => {
    console.error(error);
  });
