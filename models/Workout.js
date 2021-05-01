const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        //set default to current date.
        default: Date.now,
    },

    //exercise array 
    exercises: [
        {
            //type of workout e.g. cardio
            type: {
                type: String,
                required: true
            },
            //name of workout e.g. jogging
            name: {
                type: String,
                required: true
            },
            //duration(in minutes)
            duration: {
                type: Number,
                required: true
            },
            //weight (pounds)
            weight: {
                type: Number,
                default: 0
            },

            sets: {
                type: Number,
                default: 0
            },

            reps: {
                type: Number,
                default: 0
            },
            distance: {
                type: Number,
                default: 0
            },
        }
    ],
    totalDuration: {
        type: Number,
        default: 0
    }
},
    {
        toObject: { virtuals: true },
        toJSON: { virtuals: true },
    }
);

// const virtual = WorkoutSchema.virtual('totalduration');

// virtual.get(function (value, virtual, doc) {
//     return db.Workout.aggregate([{
//         $project: {
//             totalDuration: {
//                 $sum: "$duration"
//             }
//         }
//     }]
//     )
// });

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
