const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode');

const address = process.argv[2];

if (!address) {
  console.log('Please provide an address');
  return;
}

geocode(address).then(({ error, data }) => {
  if (error) {
    console.log('Error', error);
    return;
  }

  const { location, latitude, longitude } = data;

  forecast(latitude, longitude).then(({ error, data }) => {
    if (error) {
      console.log('Error', error);
      return;
    }

    const { weather, temperature, feelslike } = data;
    console.log(
      `${location}. Weather: ${weather}. Temperature: ${temperature}. Thermal sensation: ${feelslike}`
    );
  });
});
