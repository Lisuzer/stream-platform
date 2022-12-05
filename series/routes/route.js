"use strict";
const express = require("express");
const router = express.Router();
const controller = require("../controllers/appController");

router.get("/catalog", controller.getAll);
router.get("/:id", controller.getById);
router.post("/save", controller.save);
router.put("/add-episode/:id", controller.saveEpisode);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

module.exports = router;
