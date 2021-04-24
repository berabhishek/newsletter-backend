const Achievement = require("../models").Achievement;

module.exports = {
    async getAllAchievements(req, res) {
        try {
            let achievements = await Achievement.findAll({});
            res.status(201).send(achievements);
        } catch(err) {
            console.error(err);
            res.status(500).send(err);
        }
    },

    async createAchievement(req, res) {
        try {
            const achievements = await Achievement.create({
                image: req.body.image,
                body: req.body.body
            });
            res.status(200).send(achievements);
        } catch(err) {
            console.error(err);
            res.status(500).send(err);
        }
    }
}