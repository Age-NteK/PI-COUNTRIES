const { Country, Activity } = require("../../db");
const { Op } = require("sequelize");

const getCountryByName = async (req, res) => {
  try {
    const { name } = req.query;

    const searchCountry = await Country.findOne({
      where: {
        [Op.or]: [
          { name: { [Op.eq]: name } },
          { name: { [Op.iLike]: `%${name}%` } },
        ],
      },
      include: { model: Activity },
    });

    if(searchCountry){ res.status(200).json({ searchCountry })} 
  
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error occurred while searching for country" });
  }
};

module.exports = getCountryByName;
