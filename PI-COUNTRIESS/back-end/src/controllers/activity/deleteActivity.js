const { Activity } = require("../../db");

const deleteActivity = async (req, res) => {
  try {
    const { id_activity } = req.params;

    const activityToDelete = await Activity.findByPk(id_activity);

    if (!activityToDelete) throw Error("Activity Not Found");

    await Activity.destroy({
      where: {
        id_activity: id_activity,
      },
    });

    res.status(200).json(`The Activity ${id_activity} was deleted succesfully`);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteActivity;