const geocode = require("./utils/geocode")
const request = require("request");

geocode("Philadelphia", (error, data) => {
  console.log('Error:', error)
  console.log('Data:', data)
})
// const weatherUrl = `https://api.darksky.net/forecast/e1a90f332437d644e8d4a0b2909526c1/${latitude},${longtitude}`;
//     request({ url: weatherUrl, json: true }, (error, response) => {
//       if (error) {
//         console.log("Unable to connect to weather service!");
//       } else if (response.body.body) {
//         console.log("Unable to find location!");
//       } else {
//         const { temperature, precipProbability } = response.body.currently;
//         console.log(
//           `It is currently ${temperature} degrees out. There is ${precipProbability}% chance of rain.`
//         );
//       }
//     });