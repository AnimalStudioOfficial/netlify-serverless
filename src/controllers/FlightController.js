const Flight = require("../models/Flight");
var ObjectId = require("mongoose").Types.ObjectId;

module.exports = {
  /**------------- SERVICE to create a new Flight -----------*/
  async createFlight(req, res) {
    const { Year, Month, DayofMonth, DayOfWeek, DepTime,
      CRSDepTime, ArrTime, CRSArrTime, UniqueCarrier, FlightNum,
      TailNum, ActualElapsedTime, CRSElapsedTime, AirTime,
      ArrDelay, DepDelay, Origin, Dest, Distance, TaxiIn,
      TaxiOut, Cancelled, CancellationCode, Diverted,
      CarrierDelay, WeatherDelay, NASDelay, SecurityDelay,
      LateAircraftDelay,
    } = req.body;

    try {
      
      const flight = await Flight.create({
        Year, Month, DayofMonth, DayOfWeek, DepTime,
        CRSDepTime, ArrTime, CRSArrTime, UniqueCarrier,
        FlightNum, TailNum, ActualElapsedTime, CRSElapsedTime,
        AirTime, ArrDelay, DepDelay, Origin, Dest, Distance,
        TaxiIn, TaxiOut, Cancelled, CancellationCode, Diverted,
        CarrierDelay, WeatherDelay, NASDelay, SecurityDelay,
        LateAircraftDelay,
      });
      return res.json(flight);

    } catch (error) {
      console.log(error);
      return res.status(400).json({
        message: "Something went grong while creating flight" + error,
      });
    }
  },

  /**------------- SERVICE to update a Flight -----------*/
  async updateFlight(req, res) {
    const { _id, Year, Month, DayofMonth, DayOfWeek, DepTime,
      CRSDepTime, ArrTime, CRSArrTime, UniqueCarrier, FlightNum,
      TailNum, ActualElapsedTime, CRSElapsedTime, AirTime,
      ArrDelay, DepDelay, Origin, Dest, Distance, TaxiIn,
      TaxiOut, Cancelled, CancellationCode, Diverted, CarrierDelay,
      WeatherDelay, NASDelay, SecurityDelay, LateAircraftDelay,
    } = req.body;

    try {
      const flight = await Flight.update(
        { _id: _id },
        { Year, Month, DayofMonth, DayOfWeek, DepTime, CRSDepTime,
          ArrTime, CRSArrTime, UniqueCarrier, FlightNum, TailNum,
          ActualElapsedTime, CRSElapsedTime,  AirTime, ArrDelay,
          DepDelay, Origin, Dest, Distance, TaxiIn, TaxiOut,
          Cancelled, CancellationCode, Diverted, CarrierDelay,
          WeatherDelay, NASDelay, SecurityDelay, LateAircraftDelay,
        }
      );

      return res.json(flight);

    } catch (error) {
      return res.status(400).json({
        message: "Something went grong while updating flight" + error,
      });
    }
  },

  /**--------------- SERVICE to delete a Flight -------------------*/
  async deleteFlight(req, res) {
    const { flightId } = req.params;
    try {
      await Flight.findByIdAndDelete(flightId);
      return res.status(204);
    } catch (error) {
      return res
        .status(400)
        .json({ message: "Flight with that id does not exist" });
    }
  },

  /**---------- SERVICE to get a Flight by its flight ID ---------*/
  async getFlightById(req, res) {
    const { flightId } = req.params;
    try {
      const flight = await Flight.findById(flightId);
      return res.json(flight);
    } catch (error) {
      return res
        .status(400)
        .json({ message: "Flight with that id does not exist" });
    }
  },

  /**------- SERVICE to get a Flight by its flight number -------*/
  async getFlightByNumber(req, res) {
    const { FlightNum } = req.params;
    try {
      const flights = await Flight.find({ FlightNum: FlightNum });
      return res.json(flights);
    } catch (error) {
      return res
        .status(400)
        .json({ message: "There is no flights with that number!" });
    }
  },

  /**------------- SERVICE to get all Flight numbers -----------*/
  async getFlightNumbers(req, res) {
    try {
      const flightNumbers = await Flight.find({}).distinct("FlightNum");
      res.status(200).json(flightNumbers);
    } catch (error) {
      return res.status(400).json({ message: "An error ocurred" + error });
    }
  },
};