"use strict";
const express = require("express");
const router = express.Router();
const controller = require("../controllers/appController");

router.get("/index", controller.getAll);
router.get("/:id", controller.getById);
router.post("/save").post(controller.save);
router.put("/set-subscribe/:id", controller.subscribe);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

module.exports = router;
