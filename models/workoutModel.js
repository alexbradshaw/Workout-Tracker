const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({

  day: {
    type: Date,
    default: Date.now,
  },

  exercises: [{
    type: {
      type: String,
      trim: true,
    },

    name: {
      type: String,
      trim: true,
    },

    duration: {
      type: Number,
    },

    weight: {
      type: Number,
    },

    sets: {
      type: Number,
    },

    reps: {
      type: Number,
    },

    distance: {
      type: Number,
    },

    totalDuration: {
      type: Number,
    }
  }
  ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
