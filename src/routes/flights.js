var express = require("express");
var router = express.Router();
var FlightController = require("../controllers/FlightController");

/* GET users listing. */

router.get('/', function(req, res, next) {
    //res.render('index', { title: 'Express' });
    res.status(200).json({message: "You are in the flights API"});
});

router.post("/new", FlightController.createFlight);
router.get("/number/:FlightNum", FlightController.getFlightByNumber);
router.get("/search/:flightId", FlightController.getFlightById);
router.get("/numbers", FlightController.getFlightNumbers);
router.put("/update/:_id", FlightController.updateFlight);
router.delete("/delete/:flightId", FlightController.deleteFlight);

module.exports = router;
