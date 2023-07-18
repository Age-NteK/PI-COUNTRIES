const { Country } = require("../db");
const axios = require("axios");

const URL = "http://localhost:5000/countries";

async function DB_connect() {
  try {
    const { data } = await axios.get(URL);

    let countries = data.map((item) => {
      return {
        id_country: item.cca3,
        name: item.name.common,
        flag_image: item.flags.png, 
        continent: item.continents, 
        capital: item.capital,
        subregion: item.subregion,
        area: item.area,
        population: item.population,
      };
    });

    await Country.bulkCreate(countries);
    console.log("Database Created...");
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}

module.exports = DB_connect;