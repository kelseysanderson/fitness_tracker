const router = require("express").Router();
const db = require("../models");

router.get("/api/workouts", (req, res) => {
  db.Workout.findOne({}).sort({ day: -1 })
    .then(dbWorkout => {
      dbWorkout.totalDuration = dbWorkout.exercises.reduce(function (a, b) {
        return { duration: a.duration + b.duration };
      }, { duration: 0} ).duration

      res.json([dbWorkout]);
    })
    .catch(err => {
      console.log(err)
      res.status(400).json(err);
    });
})

router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({}).limit(7).sort( { day: -1 } )
  .then((dbWorkouts) => {

    dbWorkouts.forEach(workout => {
      workout.totalDuration = workout.exercises.reduce(function (a, b) {
        return { duration: a.duration + b.duration };
      }, { duration: 0} ).duration
    })

    res.json(dbWorkouts);
  }).catch(err => {
    console.log(err)
    res.status(400).json(err);
  });
});

router.put("/api/workouts/:id", (req, res) => {
  db.Workout.findByIdAndUpdate(
    { 
      _id: req.params.id 
    }, 
      { 
        exercises: req.body 
      }
  ).then((dbWorkout) => {
    res.json(dbWorkout);
  }).catch(err => {
    res.status(400).json(err);
  });
});

router.post("/api/workouts/", (req, res) => {
  db.Workout.create(req.body)
  .then((dbWorkout) => {
    res.json(dbWorkout);
  }).catch(err => {
    res.status(400).json(err);
  });
});



module.exports = router