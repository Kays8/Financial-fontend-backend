const financialController = require("../controller/financial.controller")
const express = require("express");
const router = express.Router()

//create
router.post("/", financialController.create);

//getAll
router.get("/", financialController.findAll);

//getById
router.get("/user/:userId", financialController.findAllByUserId);

//update
router.put(
  "/:id",
  financialController.update
);

//delete
router.delete(
  "/:id",
  financialController.delete
);

module.exports = router;