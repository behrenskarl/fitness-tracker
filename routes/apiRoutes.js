module.exports = function(app) {

// const router = require('express').Router();
const Workout = require('../models');

// "api/workouts"

// "api/workouts/:id"

// "api/workouts/range"
//GET requests

app.get("/api/workouts", (req, res) => {
    Workout.find({})
    .sort({ date: -1 })
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
      });
});

app.get("/api/workouts/range", (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

//POST requests 

app.post("/api/workouts", ({body}, res) => {
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

//PUT requests

app.put("/api/workouts/:id", ({body, params}, res) => {
    Workout.findOneAndUpdate({_id: params.id}, { $push: { exercises: body } }, {runValidators: true})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

}

// module.exports = router;
