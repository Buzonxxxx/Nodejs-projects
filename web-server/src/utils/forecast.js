const request = require("request");

const FtoC = F => ((F + 40) / 1.8 - 40).toFixed(2)

const forecast = (latitude, longtitude, callback) => {
  const url = `https://api.darksky.net/forecast/e1a90f332437d644e8d4a0b2909526c1/${latitude},${longtitude}`;
  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (response.body.error) {
      callback("Unable to find location!", undefined);
    } else {
      const { temperature, precipProbability } = response.body.currently;
      const { summary, temperatureHigh, temperatureLow } = response.body.daily.data[0];
      callback(undefined, `${summary} 目前溫度:${FtoC(temperature)}，今日最高溫: ${FtoC(temperatureHigh)}，今日最低溫: ${FtoC(temperatureLow)}，降雨機率: ${precipProbability}%。`)
    }
  });
};

module.exports = forecast;
