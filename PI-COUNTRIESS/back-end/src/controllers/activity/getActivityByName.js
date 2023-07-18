const { Activity } = require("../../db");

const getActivityByName = async (req, res) => {
  try {
    const { name } = req.query;
    const activity = await Activity.findOne({ where: { name } });

    activity
      ? res.status(200).json(activity)
      : res.status(404).json({ error: "Activity Not Found" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getActivityByName;