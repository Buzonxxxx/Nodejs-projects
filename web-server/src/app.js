const path = require("path");
const express = require("express");
const hbs = require("hbs");
const forecast = require("./utils/forecast");
const geocode = require("./utils/geocode");

const app = express();

// Defin paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Louis Liao"
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Louis Liao"
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    name: "Louis Liao",
    helpText: "This is some helpful text."
  });
});

app.get("/weather", (req, res) => {
  const { address } = req.query;
  if (!address) {
    return res.send({
      error: "You must provide address"
    });
  }
  geocode(address, (error, { latitude, longtitude, location } = {}) => {
    if (error) return res.send({ error });
    forecast(latitude, longtitude, (error, forecastData) => {
      if (error) return res.send({ error });
      res.send({
        forecast: forecastData,
        location,
        address
      });
    });
  });
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "You must provide a search term"
    });
  }
  res.send({
    products: []
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Louis Liao",
    errorMessage: "Help artical not found"
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Louis Liao",
    errorMessage: "Page not found"
  });
});

app.listen(1234, () => {
  console.log("server is up on port 1234");
});
