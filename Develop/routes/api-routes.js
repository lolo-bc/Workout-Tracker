var db = require("../models");

module.exports = function(app) {

    app.get("/", (req, res) => {
        res.send(index.html);
    });

    app.get("/api/workouts", function(req, res) {
        db.Workout.find({}, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.json(data);
            }
      });
    });
};