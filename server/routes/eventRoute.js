const express = require("express");

const eventController = require("../routeControllers/eventController")

const router = express.Router();

router
    .route("/")
    .get(eventController.getAllEvents)
    .post(eventController.createEvent)

router
    .route("/:id")
    .get(eventController.getOneEvent)
    .patch(eventController.updateEvent)
    .delete(eventController.deleteEvent)

module.exports = router