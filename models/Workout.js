const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        //set default to current date.
        default: Date.now,
    },

    exercises: [
        {
            //type of workout e.g. cardio
            type: {
                type: String,
            },
            //name of workout e.g. jogging
            name: {
                type: String,
            },
            //duration(in minutes)
            duration: {
                type: Number,
            },
            //weight (pounds)
            weight: {
                type: Number,
            },

            reps: {
                type: Number,
            },

            sets: {
                type: Number,
            },
        }
    ]
});

//add custom methods for stats page?

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
