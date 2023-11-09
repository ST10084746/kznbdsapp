const express = require("express");


const userController = require("../routeControllers/userController");

const router = express.Router();

router.post('/register', userController.signup)

router.post('/login', userController.login)

module.exports = router