const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true
});

const User = mongoose.model("User", {
  name: {
    type: String
  },
  age: {
    type: Number
  }
});

const Task = mongoose.model("Task", {
  description: {
    type: String
  },
  completed: {
    type: Boolean
  }
});

const task = new Task({
  description: "Go home",
  completed: false
});

task
  .save()
  .then(() => {
    console.log(task);
  })
  .catch(e => {
    console.log("Error", e);
  });

// const me = new User({
//   name: "Louis",
//   age: 36
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch(e => {
//     console.log("Error", e);
//   });
