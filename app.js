const request = require('postman-request');

const url =
  'http://api.weatherstack.com/current?access_key=1fd03bca277378d586ad6a69f1401fd9&query=Pamplona';

request(url, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.current);
});
