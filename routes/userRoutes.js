const express = require("express");
const router = express.Router();
const { getAllUser,getSingleUser,updateUser,deleteUser } = require("../controller/userController");

router.get("/",getAllUser);
router.get("/:id",getSingleUser);
router.put("/:id",updateUser);
router.put("/delete/:id",deleteUser);

module.exports = router;