const { Activity } = require("../../db");

const updateActivity = async (req, res) => {
  try {
    const { id_activity } = req.params;

    const { name, difficulty, duration, season } = req.body;

    const activity = await Activity.findByPk(id_activity);

    if (!activity) throw Error("Activity not found");

    activity.id_activity = id_activity || activity.id_activity;
    activity.name = name || activity.name;
    activity.difficulty = difficulty || activity.difficulty;
    activity.duration = duration || activity.duration;
    activity.season = season || activity.season;

    await activity.save();

    return res.status(200).json(activity);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = updateActivity;
