"use strict";

const controller = require("../controllers/appController");

module.exports = (app) => {
    app.route("/series/catalog").get(controller.getAll);
    app.route("/series/:id").get(controller.getById);
    app.route("/series").post(controller.save);
    app.route("/series/episode").post(controller.saveEpisode);
    app.route("/series-update/:id").put(controller.update);
    app.route("/series-delete/:id").delete(controller.delete);
};
