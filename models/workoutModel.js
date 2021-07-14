const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  workoutType: {
    type: String,
    trim: true,
  },
  
  nameInput: {
    type: String,
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

  resistanceDurationInput: {
    type: Number,
    trim: true,
  },

  cardioNameInput: {
    type: Number,
    trim: true,
  },

  durationInput: {
    type: Number,
    trim: true,
  },

  distanceInput: {
    type: Number,
    trim: true,
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
