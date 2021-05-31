const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode');

forecast(34.0544, -118.2439).then(({ error, data }) => {
  console.log('Error', error);
  console.log('Data', data);
});

geocode('Los Angeles').then(({ error, data }) => {
  console.log('Error', error);
  console.log('Data', data);
});
