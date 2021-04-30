const router = require("express").Router();
const db = require("../models");

router.get("api/workouts", (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout)
    })
    .catch(err => {
      res.status(400).json(err);
    })
})

//api/workouts put
router.put("/api/workouts/:id", ({params, body}, res) => {
  db.Workout.updateOne({ _id: params.id },
    { $push: {
        exercises: { body }
      },
    }
  )
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.post("/api/workouts", (req, res) => {
  db.Workout.create(req.body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.get("/api/workouts/range", ({body, params}, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout)
    })
    .catch(err => {
      res.status(400).json(err);
    })
})

 module.exports = router