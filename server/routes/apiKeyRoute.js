const express = require("express");
const checkUserAuth = require("../middleware/checkUserAuth");

const apiKeyController = require("../routeControllers/apiKeyController")

const router = express.Router();

router
    .route("/")
    .get(checkUserAuth, apiKeyController.getAllKeys)
    .post(checkUserAuth,apiKeyController.createApiKey)

router
    .route("/:id")
    .get(checkUserAuth, apiKeyController.getOneApiKey)
    .delete(checkUserAuth,apiKeyController.deleteApiKey)

module.exports = router