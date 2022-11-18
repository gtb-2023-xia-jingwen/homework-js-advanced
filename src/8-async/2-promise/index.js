function fetchData(url) {
  // <-- start
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function(){
      if (this.status === 200) {
        resolve(JSON.stringify(xhr.response));
      }else{
        console.log("error");
      }
    };
    xhr.error = function() {
      reject(xhr.statusText);
    };
    xhr.send();
  });
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
