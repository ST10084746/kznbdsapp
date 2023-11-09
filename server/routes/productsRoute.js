const express = require("express");

const productController = require("../routeControllers/productController");
const checkUserAuth = require("../middleware/checkUserAuth")
const checkApiKey = require("../middleware/checkApiKey")

const router = express.Router();

router
    .route("/")
    .get(checkApiKey, productController.getAllProducts)
    .post(checkUserAuth, productController.createProduct)

router
    .route("/:id")
    .get(checkApiKey, productController.getOneProduct)
    .patch(checkUserAuth, productController.updateProduct)
    .delete(checkUserAuth, productController.deleteProduct)

module.exports = router