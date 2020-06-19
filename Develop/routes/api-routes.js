var db = require("../models");

 
module.exports = function(app) {

    app.get("/", (req, res) => {
        res.send(index.html);
    });

    app.get("/api/workouts", function(req, res) {
        db.Workout.find({}).then(function(data) {
            res.json(data);
        });
    });

    app.get("/api/workouts/range", function(req, res) {
        db.Workout.find({}).then(function(data) {
            res.json(data);
        });
    });

    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.updateOne({ _id: req.params.id }, {exercises: [req.body]}).then(function(updatedData) {
            res.json(updatedData);
          });
      });

      app.post("/api/workouts", (req, res) => {
        db.Workout.create(req.body)
        .then(newdata => {
            console.log(newdata + "post newdata ");
            res.json(newdata);
          })
          .catch(({ message }) => {
            console.log(message);
          });
      });
};