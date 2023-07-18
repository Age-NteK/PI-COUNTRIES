const { Country, Activity } = require("../../db");

const getAllActivityCountry = async (req, res) => {
  try {
    let allActivities = await Activity.findAll({
      include: {
        model: Country,
        attributes: ["id_country", "name", "flag_image", "continent", "capital","subregion", "area", "population"],
      },
    });

    return res.status(200).json({ allActivities });
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

module.exports =  getAllActivityCountry;