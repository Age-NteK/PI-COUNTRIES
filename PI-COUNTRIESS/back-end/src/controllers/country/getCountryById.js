const { Country, Activity } = require("../../db");

const getCountryById = async (req, res) => {
  try {
    const { id_country } = req.params;
    const searchCountry = await Country.findByPk(id_country.toUpperCase(), {
      include: { model: Activity },
    });

      return res.status(200).json({ searchCountry });


  } catch (error) {
    return res.status(404).json({ message: "Country not found" });
  }
};

module.exports = getCountryById;
