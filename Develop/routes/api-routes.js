var db = require("../models/exercises.js");

 
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

    app.put("/api/workouts/:id", (req, res) => {
        // console.log(req.body);
        db.findByIdAndUpdate(req.body), (err, data) => {
          console.log(req.body);
          if (err) {
            console.log(err);
          } else {
            res.json(data);
          }
        };
      });

      app.post("/api/workouts", (req, res) => {
        console.log("ooooooo" + req.body);
        db.create(req.body)
        .then(newdata => {
            console.log(newdata + "PPPPPPPP");
            res.json(newdata);
          })
          .catch(({ message }) => {
            console.log(message);
          });
      });
};