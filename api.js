const fetch = require("node-fetch");

const req = "Plot 6 Agidingbi road Ikeja, Lagos, Nigeria";

const url = `https://geocode.xyz/locate=${req}?json=1&auth=523396516416254815004x3446`;

const getData = async (url) => {
  try {
    const response = await fetch(url);
    const jsonOutput = await response.json();
    console.log(jsonOutput);
  } catch (error) {
    console.log(error);
  }
};
getData(url);