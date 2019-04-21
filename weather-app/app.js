const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];
if (!address) return console.log("Please provide an address.");
geocode(address, (error, { latitude, longtitude, location }) => {
  if (error) return console.log("Error:", error);
  forecast(latitude, longtitude, (error, forecastData) => {
    if (error) return console.log("Error", error);
    console.log(location);
    console.log(forecastData);
  });
});
