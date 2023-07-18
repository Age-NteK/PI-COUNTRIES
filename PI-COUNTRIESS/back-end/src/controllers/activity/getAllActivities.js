const { Activity } = require("../../db");

const getAllActivities = async (req, res) => {
  try {
    let searchActivity = await Activity.findAll();

    if (searchActivity.length > 0){
      return res.status(200).json({ searchActivity });
    }

  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

module.exports = getAllActivities;
