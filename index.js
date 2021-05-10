// var axios = require('axios');

var popular_list = document.getElementById('popular_list');

function fetchData() {
  return axios.get('localhost:4000/api/movies?target=popular', {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  });
}

var popularMovie = fetchData().then(function (result) {
  console.log(result);
  return;
});
console.log('popularMovie:', popularMovie);
