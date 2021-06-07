const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode');

const address = process.argv[2];

if (!address) {
  console.log('Please provide an address');
  return;
}

geocode(address).then(({ error: geocodeError, data: geocodeData }) => {
  if (geocodeError) {
    console.log('Error', error);
    return;
  }

  const { location, latitude, longitude } = geocodeData;

  forecast(latitude, longitude).then(
    ({ error: forecastError, data: foreCastData }) => {
      if (forecastError) {
        console.log('Error', error);
        return;
      }

      const { weather, temperature, feelslike } = foreCastData;
      console.log(
        `${location}. Weather: ${weather}. Temperature: ${temperature}. Thermal sensation: ${feelslike}`
      );
    }
  );
});
