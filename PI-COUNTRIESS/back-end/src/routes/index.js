const { Router } = require("express");
const router = Router();
const countryRouter = require("./country/countryRouter");
const activityRouter = require("./activity/activityRouter");
const activityCountryRouter = require('./activityCountry/activityCountryRouter')

router.use("/country", countryRouter);
router.use("/activity", activityRouter);
router.use('/activitycountry', activityCountryRouter)

module.exports = router;

