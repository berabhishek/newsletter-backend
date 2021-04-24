const achivementController = require("../controllers").achievement;
const alumniController = require("../controllers").alumni
module.exports = (app) => {
    app.get("/api", (req, res) => {
        res.status(200).send({
            data: "Welcome"
        }); 
    });
    app.get("/api/achievements", achivementController.getAllAchievements);
    app.post("/api/achievements", achivementController.createAchievement);
    app.get("/api/alumni", alumniController.getAllAlumni);
    app.post("/api/alumni", alumniController.createAlumni);
}