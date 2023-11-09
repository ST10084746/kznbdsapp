const express = require("express");
const checkUserAuth = require("../middleware/checkUserAuth")
const checkApiKey = require("../middleware/checkApiKey")

const eventController = require("../routeControllers/eventController")

const router = express.Router();

router
    .route("/")
    .get(checkApiKey,eventController.getAllEvents)
    .post(checkUserAuth,eventController.createEvent)

router
    .route("/:id")
    .get(checkApiKey, eventController.getOneEvent)
    .patch(checkUserAuth,eventController.updateEvent)
    .delete(checkUserAuth,eventController.deleteEvent)

module.exports = router