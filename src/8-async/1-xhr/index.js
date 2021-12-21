function fetchData(url, successCallback, errorCallback) {
  const xhr = new XMLHttpRequest();
  // <-- start
  // TODO: 通过XMLHttpRequest实现异步请求

  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(
  URL,
  (result) => {
    document.writeln(JSON.parse(result).name);
  },
  (error) => {
    console.error(error);
  }
);
