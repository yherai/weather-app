const request = require('postman-request');

const url =
  'http://api.weatherstack.com/current?access_key=1fd03bca277378d586ad6a69f1401fd9&query=Pamplona&units=f';

request(url, { json: true }, (error, response) => {
  const { current = {} } = response.body;
  console.log(
    `${current.weather_descriptions[0]}. It is currently ${current.temperature} degress out. It feels like ${current.feelslike} degress out`
  );
});
