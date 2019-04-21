const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Weather</h1>");
});

app.get("/help", (req, res) => {
  res.send([
    {
      name: "Louis"
    },
    {
      name: "Anney"
    }
  ]);
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: "It's snowing",
    location: "Taipei"
  });
});

app.get("/about", (req, res) => {
  res.send("<h1>About</h1>");
});

app.listen(3000, () => {
  console.log("server is up on port 3000");
});

// app.com
// app.com/help
// app.com/about
