const Lecture = require("../models").Lecture;

module.exports = {
    async getAllLectures(req, res) {
        try {
            let lectures = await Lecture.findAll({});
            res.status(201).send(lectures);
        } catch(err) {
            console.error(err);
            res.status(500).send(err);
        }
    },

    async createLecture(req, res) {
        try {
            const lectures = await Lecture.create({
                lecture: req.body.lecture
            });
            res.status(200).send(lectures);
        } catch(err) {
            console.error(err);
            res.status(500).send(err);
        }
    }
}