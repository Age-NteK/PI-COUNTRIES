const countryRouter = require("express").Router();
const getAllCountries = require("../../controllers/country/getAllCountries");
const getCountryById = require("../../controllers/country/getCountryById");
const getCountryByName = require("../../controllers/country/getCountryByName");
const createCountry = require("../../controllers/country/createCountry");
const updateCountry = require("../../controllers/country/updateCountry");
const deleteCountry = require("../../controllers/country/deleteCountry");

countryRouter.get("/", (req, res) => {
  const { name } = req.query;
  !name ? getAllCountries(req, res) : getCountryByName(req, res);
});
countryRouter.get("/:id_country", getCountryById);
countryRouter.post("/", createCountry);
countryRouter.put("/:id_country", updateCountry);
countryRouter.delete("/:id_country", deleteCountry);

module.exports = countryRouter;