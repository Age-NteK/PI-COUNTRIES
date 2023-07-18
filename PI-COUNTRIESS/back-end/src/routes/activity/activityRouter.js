const activityRouter = require("express").Router();
const createActivity = require("../../controllers/activity/createActivity");
const getActivityById = require("../../controllers/activity/getActivityById");
const getAllActivities = require("../../controllers/activity/getAllActivities");
const updateActivity = require("../../controllers/activity/updateActivity");
const deleteActivity = require("../../controllers/activity/deleteActivity");
const getActivityByName = require("../../controllers/activity/getActivityByName");

activityRouter.get("/", (req, res) => {
  const { name } = req.query;
  !name ? getAllActivities(req, res) : getActivityByName(req, res);
});
activityRouter.get("/:id_activity", getActivityById);
activityRouter.post("/", createActivity);
activityRouter.put("/:id_activity", updateActivity);
activityRouter.delete("/:id_activity", deleteActivity);

module.exports = activityRouter;