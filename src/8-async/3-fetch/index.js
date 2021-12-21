function fetchData(url) {
  // <-- start
  // TODO: 通过Fetch API实现异步请求
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
