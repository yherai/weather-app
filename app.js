const request = require('postman-request');

const weatherUrl =
  'http://api.weatherstack.com/current?access_key=1fd03bca277378d586ad6a69f1401fd9&query=Pamplona&units=f';

request(weatherUrl, { json: true }, (error, response) => {
  const { current = {} } = response.body;
  console.log(
    `${current.weather_descriptions[0]}. It is currently ${current.temperature} degress out. It feels like ${current.feelslike} degress out`
  );
});

const geocodeUrl =
  'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoieWhlYWkiLCJhIjoiY2twMnZhOGkxMTQ0bTMybXdxNW9qNXM3dCJ9.dyOisG52jhDNR5Kq4HHbZA&limit=1';

request(geocodeUrl, { json: true }, (error, response) => {
  const { features = [] } = response.body;
  const { place_name, center } = features[0];
  console.log(
    `${place_name} - Longitude: ${center[0]}, Latitude: ${center[1]}`
  );
});
