const express = require("express");
const userController = require("../routeControllers/userController");


const router = express.Router();
const  ExpressBrute = require('express-brute');

const store = new ExpressBrute.MemoryStore()
const bruteforce = new ExpressBrute(store);

router.post('/register', userController.signup)

router.post('/login',bruteforce.prevent, userController.login)

module.exports = router