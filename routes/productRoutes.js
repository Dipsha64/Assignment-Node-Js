const express = require("express");
const router = express.Router();
const { getAllproduct, getSingleProduct, updateProduct, deleteProduct } = require("../controller/productController");

router.get("/",getAllproduct);
router.get("/:id",getSingleProduct);
router.put("/:id",updateProduct);
router.delete("/:id",deleteProduct);

module.exports = router;