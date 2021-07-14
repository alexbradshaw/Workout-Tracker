const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
const logger = require('morgan');
const mongojs = require("mongojs");

const PORT = process.env.PORT || 3000;

const db = require("./models")
const app = express();
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1/Workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/exercise.html"));
});

app.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/stats.html"));
});

app.get("/api/workouts", (req, res) => {
  db.Workout.find({}, (error, data) => {
    console.log(data)
    if (error) {
      res.send(error);
    } else {
      res.send(data);
    }
  }, { sort: { 'created_at': 1 } });
});

app.post("/api/workouts", async (req, res) => {
  console.log(req.body);
  const workout = await db.Workout.create({})
  try {
    res.json(workout)
  } catch (error) {
    console.error(error);
  }
});

app.put("/api/workouts/:id", async (req, res) => {
  const doc = await db.Workout.findOneAndUpdate({id: req.params.id}, req.body, {
    returnOriginal: false
  });
  try {
    res.json(doc)
  } catch (error) {
    console.error(error);
  }
})

app.get("/all", (req, res) => {
  workout.findOne({}, {}, { sort: { 'created_at': -1 } }, function (err, post) {
    console.log(post);
  });
});

app.get("/find/:id", (req, res) => {
  db.notes.findOne(
    {
      _id: mongojs.ObjectId(req.params.id)
    },
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    }
  );
});

app.post("/update/:id", (req, res) => {
  db.notes.update(
    {
      _id: mongojs.ObjectId(req.params.id)
    },
    {
      $set: {
        title: req.body.title,
        note: req.body.note,
        modified: Date.now()
      }
    },
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  db.notes.remove(
    {
      _id: mongojs.ObjectID(req.params.id)
    },
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    }
  );
});

app.delete("/clearall", (req, res) => {
  db.notes.remove({}, (error, response) => {
    if (error) {
      res.send(error);
    } else {
      res.send(response);
    }
  });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});