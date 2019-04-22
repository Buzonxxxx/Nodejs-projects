const path = require('path')
const express = require("express");

const app = express();

// Defin paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public")
const viewPaths = path.join(__dirname, "../views")

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewPaths)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get("", (req, res) => {
  res.render('index', {
    title: "Weather App",
    name: "Louis"
  })
})

app.get("/about", (req, res) => {
  res.render('about', {
    title: "About Me",
    name: "Louis"
  })
})

app.get("/help", (req, res) => {
  res.render('help', {
    title: "Help",
    helpText: "This is some helpful text."
  })
})

app.get("/weather", (req, res) => {
  res.send({
    forecast: "It's snowing",
    location: "Taipei"
  });
});

app.listen(3000, () => {
  console.log("server is up on port 3000");
});

