const { Country } = require("../../db");

const deleteCountry = async (req, res) => {
  try {
    const { id_country } = req.params;

    const countryToDelete = await Country.findByPk(id_country);

    if (!countryToDelete) throw Error("Country Not Found");

    await Country.destroy({
      where: {
        id_country: id_country,
      },
    });

    res.status(200).json(`The Country ${id_country} was deleted succesfully`);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteCountry;