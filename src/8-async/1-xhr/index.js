function fetchData(url, successCallback, errorCallback) {
  const xhr = new XMLHttpRequest();
  // <-- start
  xhr.open('GET', url);
  xhr.responseType = 'json';
  xhr.onload = function() {
    if (this.status === 200) {
      successCallback(JSON.stringify(this.response));
    }else{
        console.log("error");
    }
  };
  xhr.onerror = errorCallback;
  xhr.send();
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
