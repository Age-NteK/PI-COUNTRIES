const { Country } = require("../../db");

const updateCountry = async (req, res) => {
  try {
    const { id_country } = req.params;
    const {
      name,
      flag_image,
      continent,
      capital,
      subregion,
      area,
      population,
    } = req.body;

    const country = await Country.findByPk(id_country);

    if (!country) {
      return res.status(404).json({ error: "Country Not Found" });
    }

    //EJEMPLO DE LOGICA AQUI
    // Si name se proporciona en el cuerpo de la solicitud
    // Entonces se le asigna country.name
    // De lo contrario se mantiene el valor actual de country.name
    country.id_country = id_country || country.id_country;
    country.name = name || country.name;
    country.flag_image = flag_image || country.flag_image;
    country.continent = continent || country.continent;
    country.capital = capital || country.capital;
    country.subregion = subregion || country.subregion;
    country.area = area || country.area;
    country.population = population || country.population;

    await country.save();

    return res.status(200).json(country);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = updateCountry;
