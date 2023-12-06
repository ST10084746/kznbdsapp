const express = require("express");
const checkUserAuth = require("../middleware/checkUserAuth")


const phraseController = require("../routeControllers/phraseController")

const router = express.Router();

router
    .route("/")
    .get(phraseController.getAllPhrases)
    .post(checkUserAuth,phraseController.createPhrase)

router
    .route("/:id")
    .get(phraseController.getOnePhrase)
    .patch(checkUserAuth,phraseController.updatePhrase)
    .delete(checkUserAuth,phraseController.deletePhrase)

module.exports = router