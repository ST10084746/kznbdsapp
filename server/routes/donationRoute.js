const express = require("express");

const donationController = require("../routeControllers/donationContoller");

const router = express.Router();

router
    .route("/")
    .get(donationController.getAllDonations)
    .post(donationController.createDonation)

router
    .route("/:id")
    .get(donationController.getOneDonation)
    .patch(donationController.updateDonation)
    .delete(donationController.deletePost)

module.exports = router