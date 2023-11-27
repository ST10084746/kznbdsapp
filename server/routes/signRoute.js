const express = require("express");
const checkUserAuth = require("../middleware/checkUserAuth")
const checkApiKey = require("../middleware/checkApiKey")

const signController = require("../routeControllers/signControllers")

const router = express.Router();

router
    .route("/")
    .get(signController.getAllSigns)
    .post(checkUserAuth,signController.createSign)

router
    .route("/:id")
    .get(signController.getOneSign)
    .patch(checkUserAuth,signController.updateSign)
    .delete(checkUserAuth,signController.deleteSign)

module.exports = router