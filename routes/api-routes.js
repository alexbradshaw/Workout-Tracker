const router = require("express").Router();
const db = require('../models')

router.get("/api/workouts", async (req, res) => {
    const workouts = await db.Workout.aggregate([{ $addFields: { totalDuration: { $sum: '$exercises.duration', } } }])
    try {
        res.json(workouts)
    } catch (error) {
        console.error(error);
    }
});

router.post("/api/workouts", async (req, res) => {
    console.log(req.body);
    const workout = await db.Workout.create({})
    try {
        res.json(workout)
    } catch (error) {
        console.error(error);
    }
});

router.put("/api/workouts/:id", async (req, res) => {
    console.log(req.body);
    const doc = await db.Workout.findOneAndUpdate({ _id: req.params.id }, 
        { $push: { exercises: req.body } },
        { new: true, runValidators: true, returnOriginal: false });
    try {
        res.json(doc)
    } catch (error) {
        console.error(error);
    }
})

router.get("/api/workouts/range", async (req, res) => {
    const workout = await db.Workout.aggregate([{ $addFields: { totalDuration: { $sum: '$exercises.duration', } } }])
    try {
        res.json(workout)
    } catch (error) {
        console.error(error);
    }
});

module.exports = router;