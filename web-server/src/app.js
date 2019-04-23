const path = require("path");
const express = require("express");
const hbs = require("hbs");

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
    name: "Louis Liao",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Louis Liao",
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
  res.send({
    forecast: "It's snowing",
    location: "Taipei"
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Louis Liao",
    errorMessage: "Help artical not found"
  })
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Louis Liao",
    errorMessage: "Page not found"
  })
});

app.listen(3000, () => {
  console.log("server is up on port 3000");
});
