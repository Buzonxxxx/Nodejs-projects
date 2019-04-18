const request = require('request')
const geoUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYnV6b25saWFvIiwiYSI6ImNqdW1zOG80djAwdnU0NG81OHNjenM1ZDkifQ.d1DBjrMq77z8FgifPyVUfQ"
request({ url: geoUrl, json: true, method: "GET",  }, (error, response) => {
  const latitude = response.body.features[0].center[1]
  const longtitude = response.body.features[0].center[0]
  const weatherUrl = `https://api.darksky.net/forecast/e1a90f332437d644e8d4a0b2909526c1/${latitude},${longtitude}`;
  request({ url: weatherUrl, json: true, method: "GET",  }, (error, response) => {
    const { temperature, precipProbability } = response.body.currently;
    console.log(`It is currently ${temperature} degrees out. There is ${precipProbability}% chance of rain.`);
  });
});



