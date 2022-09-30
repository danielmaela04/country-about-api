const express = require("express");
const axios = require("axios");
require("dotenv").config();
const port = process.env.port;
const BASE_URL = process.env.BASE_URL;
const app = express();

app.get("/all", (req, res) => {
  axios
    .get(`${BASE_URL}/all`)
    .then((result) => res.send(result.data.slice(0, 5)))
    .catch((error) => console.error(error));
});

app.get("/name/:countryName", (req, res) => {
  const { countryName } = req.params;
  axios
    .get(`${BASE_URL}/name/${countryName}`)
    .then((result) => res.send(result.data))
    .catch((error) => console.error(error));
});

app.get("/currency/:currency", (req, res) => {
  const { currency } = req.params;
  axios
    .get(`${BASE_URL}/currency/${currency}`)
    .then((result) => res.send(result.data))
    .catch((error) => console.error(error));
});

app.listen(port, () => {
  console.log(`The server is running on: http://localhost:${port}`);
});
