const router = require("express").Router();
const db = require("../models");

router.get("/api/workouts", (req, res) => {
    db.Workout.find({}, (error, data) => {
        console.log(data)
        if (error) {
            res.send(error);
        } else {
            res.send(data);
        }
    }, { sort: { 'created_at': 1 } });
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
    const doc = await db.Workout.findOneAndUpdate({ id: req.params.id }, req.body, {
        returnOriginal: false
    });
    try {
        res.json(doc)
    } catch (error) {
        console.error(error);
    }
})

router.get("/api/workouts/range", async (req, res) => {
    const workout = await db.Workout.find({})
    try {
        res.json(workout);
    } catch (error) {
        console.error(error);
    }
});

module.exports = router;