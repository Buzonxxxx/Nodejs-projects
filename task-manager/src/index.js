const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();

const port = process.env.PORT || 4000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log(`server is up on port ${port}`);
});


const Task = require('./models/task')
const User = require('./models/user')
const main = async () => {
  // const task = await Task.findById('5d2cfe57a07ee37d798de453')
  // await task.populate('owner').execPopulate()
  // console.log(task.owner)
  
  const user = await User.findById('5d2cfe4ea07ee37d798de451')
  await user.populate('tasks').execPopulate()
  console.log(user.tasks)
}

main()