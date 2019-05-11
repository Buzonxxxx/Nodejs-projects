require("../src/db/mongoose");
const Task = require("../src/models/task");

Task.findByIdAndDelete("5cd1485c8cf06697c9b0da5d")
  .then(task => {
    console.log(task);
    return Task.countDocuments({ completed: false });
  })
  .then(tasks => {
    console.log(tasks);
  })
  .catch(e => {
    console.log(e);
  });
