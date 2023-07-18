const { Country } = require("../../db");

const createCountry = async (req, res) => {
  try {
    const {
      name,
      flag_image,
      continent,
      capital,
      subregion,
      area,
      population,
    } = req.body;

    if (
      !name ||
      !flag_image ||
      !continent ||
      !capital ||
      !subregion ||
      !area ||
      !population
    )
      throw Error("All fields are required");

    const newCountry = await Country.create({
      name,
      flag_image,
      continent,
      capital,
      subregion,
      area,
      population,
    });
    res.status(201).json(newCountry);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = createCountry;
