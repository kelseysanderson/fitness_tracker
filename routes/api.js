const router = require("express").Router();
const db = require("../models");


router.get("api/workouts", (req, res) => {
  console.log(req)
  db.Workout.find({})
    .then(dbWorkout => {
      console.log(res.json(dbWorkout))
      res.json(dbWorkout)
    })
    .catch(err => {
      res.status(400).json(err);
    })
})

router.post("/api/workouts", (req, res) => {
  db.Workout.create({})
    .then(dbWorkout => {
      console.log(res.json(dbWorkout))
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//api/workouts put
router.put("/api/workouts/:id", ({body, params}, res) => {
  db.Workout.updateOne({ _id: params.id },
    { $push: {
        exercises: { body }
      },
    }
  )
    .then(dbWorkout => {
      console.log(res.json(dbWorkout))
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//NEED
// /api/workouts

//get api/workouts/range

 module.exports = router