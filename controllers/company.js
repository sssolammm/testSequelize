const Company = require("../models").Company;

module.exports = {
    create(req, res) {
        return Company.create({
            name: req.body.name,
        })
        .then(() => res.status(201).send(company))
        .catch(error => res.status(400).send(error))
    },
    findAll(req, res) {
        return Company.findAll()
        .then( company => res.json(company))
        .catch(error => res.status(400).send(error))
    },
    findByPk(req, res) {
        console.log(req.params.id);
        return Company.findByPk(req.params.id)
        .then( company => res.json(company))
        .catch(error => res.status(400).send(error))
    },
};