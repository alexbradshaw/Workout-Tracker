const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({

  day: {
    type: Date,
    default: Date.now,
  },

  exercises: [{
    workoutType: {
      type: String,
      trim: true,
    },

    nameInput: {
      type: String,
      trim: true,
    },

    duration: {
      type: Number,
      trim: true,
    },

    weightInput: {
      type: Number,
      trim: true,
    },

    setsInput: {
      type: Number,
      trim: true,
    },

    repsInput: {
      type: Number,
      trim: true,
    },

    distanceInput: {
      type: Number,
      trim: true,
    },

    totalDuration: {
      type: Number,
      trim: true,
    }
  }
  ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
