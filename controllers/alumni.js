const Alumni = require("../models").Alumni;

module.exports = {
    async getAllAlumni(req, res) {
        try {
            let alumni = await Alumni.findAll({});
            res.status(201).send(alumni);
        } catch(err) {
            console.error(err);
            res.status(500).send(err);
        }
    },

    async createAlumni(req, res) {
        try {
            const alumni = await Alumni.create({
                name: req.body.name,
                designation: req.body.designation,
                batch: req.body.batch,
                company: req.body.company
            });
            res.status(200).send(alumni);
        } catch(err) {
            console.error(err);
            res.status(500).send(err);
        }
    }
}