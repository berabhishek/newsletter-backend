const achivementController = require("../controllers").achievement;

module.exports = (app) => {
    app.get("/api", (req, res) => {
        res.status(200).send({
            data: "Welcome"
        }); 
    });
    app.get("/api/achievements", achivementController.getAllAchievements);
    app.post("/api/achievements", achivementController.createAchievement);
}