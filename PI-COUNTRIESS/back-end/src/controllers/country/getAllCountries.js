const { Country, Activity } = require("../../db");

const getAllCountries = async (req, res) => {
  try {
    const countries = await Country.findAll({
      include: { model: Activity },
    });

    if (!countries) throw Error("Countries not Found");

    return res.status(200).json(countries);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getAllCountries;