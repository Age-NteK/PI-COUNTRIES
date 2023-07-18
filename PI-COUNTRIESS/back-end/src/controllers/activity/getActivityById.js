const { Activity } = require("../../db");

const getActivityById = async (req, res) => {
  try {
    const { id_activity } = req.params;
    const activity = await Activity.findByPk(id_activity);
    if (!activity) throw new Error("Activity not found");

    res.status(200).json(activity);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getActivityById;