"use strict";
const service = require("../services/service");
const controllers = {
    getAll: (req, res) => {
        return res.status(200).send(service.getAll());
    },
    getById: (req, res) => {
        return res.status(200).send(service.getById(req.params.id));
    },
    save: (req, res) => {
        service.save(req.body);
        return res.status(200).send(service.getAll());
    },
    saveEpisode: (req, res) => {
        return res.status(200).send(service.saveEpisode(req.body));
    },
    update: (req, res) => {
        return res.status(200).send(service.update(req.params.id, req.body));
    },
    delete: (req, res) => {
        res.status(200).send(service.delete(req.params.id));
    },
};

module.exports = controllers;
