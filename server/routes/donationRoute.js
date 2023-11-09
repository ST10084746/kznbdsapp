const express = require("express");
const checkUserAuth = require("../middleware/checkUserAuth")

const donationController = require("../routeControllers/donationContoller");

const router = express.Router();

router
    .route("/")
    .get(checkUserAuth,donationController.getAllDonations)
    .post(checkUserAuth,donationController.createDonation)

router
    .route("/:id")
    .get(checkUserAuth,donationController.getOneDonation)
    .patch(checkUserAuth,donationController.updateDonation)
    .delete(checkUserAuth,donationController.deletePost)

module.exports = router