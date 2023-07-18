const activityCountryRouter = require("express").Router();
const getActivityCountry = require("../../controllers/activityCountry/getActivityCountry");
const getAllActivityCountry = require("../../controllers/activityCountry/getAllActivityCountry");

activityCountryRouter.get("/", getAllActivityCountry);
activityCountryRouter.get("/:id", getActivityCountry);

module.exports = activityCountryRouter;
