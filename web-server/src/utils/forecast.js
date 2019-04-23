const request = require("request");

const forecast = (latitude, longtitude, callback) => {
  const url = `https://api.darksky.net/forecast/e1a90f332437d644e8d4a0b2909526c1/${latitude},${longtitude}`;
  request({ url, json: true }, (error,  response ) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (response.body.error) {
      callback("Unable to find location!", undefined);
    } else {
      const { temperature, precipProbability } = response.body.currently;
      callback(undefined, `${response.body.daily.data[0].summary} It is currently ${temperature}degress out. There is a ${precipProbability}% chance of rain.`)
    }
  });
};

module.exports = forecast;
