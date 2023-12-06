const express = require("express");
const checkUserAuth = require("../middleware/checkUserAuth")


const eventController = require("../routeControllers/eventController")

const router = express.Router();

router
    .route("/")
    .get(eventController.getAllEvents)
    .post(checkUserAuth,eventController.createEvent)

router
    .route("/:id")
    .get(eventController.getOneEvent)
    .patch(checkUserAuth,eventController.updateEvent)
    .delete(checkUserAuth,eventController.deleteEvent)

module.exports = router