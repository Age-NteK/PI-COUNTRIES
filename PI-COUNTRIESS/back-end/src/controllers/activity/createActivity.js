const { Activity, Country } = require("../../db");

const createActivity = async (req, res) => {
  const { name, difficulty, duration, season, countries } = req.body;

  // Verificar datos obligatorios
  if (!name || !difficulty || !duration || !season || !countries) {
    return res.status(400).json({ error: "Missing important data" });
  }

  try {
    const newActivity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });

    // Validar la existencia de los países
    const existingCountries = await Country.findAll({
      where: { id_country: countries },
    });

    const validCountries = existingCountries.map((country) => country.id_country);

    // Filtrar los países válidos que existen en la base de datos
    const filteredCountries = countries.filter((country) =>
      validCountries.includes(country)
    );

    // Asociar los países a la actividad
    await newActivity.setCountries(filteredCountries);

    return res.status(200).send(`Activity ${name} has been created`);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = createActivity;