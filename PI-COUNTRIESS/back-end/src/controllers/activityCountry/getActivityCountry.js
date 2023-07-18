const { Activity, CountryActivity } = require("../../db");

const getActivityCountry = async (req, res) => {
  try {
    let { id_activity } = req.params;

    let searchActivityCountry = await CountryActivity.findAll({
      where: { ActivityIdActivity: id_activity },
    });
    let activity = await Activity.findByPk(id_activity);

    if (searchActivityCountry.length > 0)
      return res.status(200).json({ searchActivityCountry, activity });
    return res.status(404).json({ message: "Activity not found" });
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

module.exports = getActivityCountry;